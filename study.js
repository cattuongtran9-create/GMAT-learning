(() => {
  'use strict';
  const C = window.GMAT_COURSE;
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const levels = { Beginner: 'Nền tảng', Intermediate: 'Vận dụng', Advanced: 'Chuyên sâu' };
  const sections = { core: 'Khởi động', quant: 'Quant', verbal: 'Verbal', di: 'Data Insights', perform: 'Kỹ năng học & thi' };
  const questionById = Object.fromEntries(C.questions.map(question => [question.id, question]));
  const storageKey = 'gmatlab-study-v3';
  let storageAvailable = true;
  function readStored(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
  function validRecord(record) { return record && typeof record.correct === 'boolean' && Number.isFinite(record.at) && record.at > 0 && Number.isFinite(record.count) && record.count >= 1 && record.count <= 1000000; }
  function cleanProgress(raw = {}) {
    return {
      version: 3,
      completed: Array.isArray(raw.completed) ? [...new Set(raw.completed.filter(id => C.byId[id]))] : [],
      attempts: Object.fromEntries(Object.entries(raw.attempts || {}).filter(([id, record]) => questionById[id] && validRecord(record)).map(([id, record]) => [id, {
        correct: record.correct, firstCorrect: typeof record.firstCorrect === 'boolean' ? record.firstCorrect : record.correct,
        at: record.at, count: record.count, elapsed: Number.isFinite(record.elapsed) ? Math.max(0, record.elapsed) : 0,
        note: String(record.note || '').slice(0, 2000), cause: String(record.cause || '').slice(0, 50)
      }])),
      lastLesson: C.byId[raw.lastLesson] ? raw.lastLesson : null
    };
  }
  let progress = cleanProgress(readStored(storageKey, { completed: readStored('gmatlab-completed', []) }));
  const ui = { library: { query: '', section: 'all', level: 'all', status: 'all' }, practice: { section: 'all', level: 'all', count: '10', mode: 'all' }, session: null, revealed: new Map(), renderedAt: Date.now() };
  let route = { view: 'home' };
  let ticker;
  function toast(message) { $('#toast').textContent = message; $('#toast').classList.add('visible'); clearTimeout(toast.timeout); toast.timeout = setTimeout(() => $('#toast').classList.remove('visible'), 3200); }
  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify(progress)); localStorage.setItem('gmatlab-completed', JSON.stringify(progress.completed)); }
    catch { storageAvailable = false; $('#saveState').textContent = 'Chưa lưu được · hãy xuất tiến độ'; toast('Bộ nhớ trình duyệt không khả dụng. Hãy xuất tiến độ trước khi đóng trang.'); }
    updateSidebar();
  }
  function mistakes() { return Object.entries(progress.attempts).filter(([, value]) => !value.correct).map(([id]) => questionById[id]); }
  function updateSidebar() {
    $('#sidebarProgress').textContent = `${progress.completed.length} / ${C.lessons.length} bài đã học`;
    $('#courseProgress').value = progress.completed.length / C.lessons.length * 100;
    $('#courseProgress').textContent = Math.round(progress.completed.length / C.lessons.length * 100) + '%';
    $('#reviewBadge').textContent = mistakes().length;
  }
  function href(id) { return '#lesson/' + encodeURIComponent(id); }
  function linkChips(ids) { return ids.filter(id => C.byId[id]).map(id => `<a href="${href(id)}">${esc(C.byId[id].title)} ↗</a>`).join(''); }
  function header(eyebrow, title, description) { return `<div class="page-heading"><span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(title)}</h1><p>${esc(description)}</p></div>`; }
  function questionsFor(id) { return C.questions.filter(question => question.lessonId === id); }
  function examplesFor(plan) { return [plan.worked, plan.workedMore, ...(plan.workedExamples || [])].filter(Boolean); }
  function statsFor(id) { const questions = questionsFor(id); const tried = questions.filter(q => progress.attempts[q.id]); const right = tried.filter(q => progress.attempts[q.id].correct); return { total: questions.length, tried: tried.length, right: right.length }; }
  function card(lesson) {
    const plan = C.plans[lesson.id], stats = statsFor(lesson.id), done = progress.completed.includes(lesson.id);
    return `<article class="card"><div class="topline"><span class="section-tag ${lesson.section}">${esc(sections[lesson.section])}</span><span>${esc(levels[lesson.level])}</span></div><h3><a href="${href(lesson.id)}">${esc(lesson.title)}</a></h3><p>${esc(lesson.description)}</p><div class="card-meta">${plan.blocks.length} phần giảng · ${examplesFor(plan).length} ví dụ · ${stats.total} bài tập${lesson.optional ? '<br>Bổ trợ · không bắt buộc' : ''}</div><div class="card-bottom"><span class="${done ? 'done-label' : ''}">${done ? '✓ Đã học' : stats.tried ? `${stats.right}/${stats.total} câu đúng` : esc(lesson.duration)}</span><a href="${href(lesson.id)}">Vào học ↗</a></div></article>`;
  }
  function home() {
    const nextId = progress.lastLesson || C.order.find(id => !progress.completed.includes(id)) || 'exam-map';
    const next = C.byId[nextId];
    const examples = Object.values(C.plans).reduce((sum, plan) => sum + examplesFor(plan).length, 0);
    const picks = ['number-line-integers', 'argument-core', 'data-units-comparisons'].map(id => C.byId[id]);
    return `<section class="hero"><div><span class="eyebrow">TỪ NỀN TẢNG ĐẾN CHUYÊN SÂU</span><h1>Học sâu.<br>Hiểu rõ.<br><em>Tiến bộ từng bài.</em></h1><p>Một lộ trình nối liền kiến thức, ví dụ và thực hành. Bắt đầu ở trình độ của bạn, hiểu từng bước giải và quay lại đúng phần cần củng cố.</p><div class="actions"><a class="button" href="${href(next.id)}">${progress.lastLesson ? 'Tiếp tục học' : 'Bắt đầu học'} <span>↗</span></a><a class="button outline" href="#roadmap">Xem lộ trình</a></div></div><div class="concept-art"><div class="art-head"><span>YOUR LEARNING MAP</span><span>03 NHÁNH</span></div>${['quant','verbal','di'].map((section,index) => `<div class="art-track"><i>0${index+1}</i><span>${esc(sections[section])}</span><b>${C.lessons.filter(l => l.section === section && !l.optional).length}<small> bài</small></b></div>`).join('')}<div class="art-foot">Nền tảng → Vận dụng → Chuyên sâu<br>Mỗi bài kết nối với các kỹ năng liên quan.</div></div></section><section class="stats" aria-label="Quy mô khóa học"><div class="stat"><strong>${C.lessons.length}</strong><span>bài học có nội dung</span></div><div class="stat"><strong>${examples}</strong><span>ví dụ giải từng bước</span></div><div class="stat"><strong>${C.questions.length}</strong><span>câu luyện tập có lời giải</span></div><div class="stat"><strong>${progress.completed.length}</strong><span>bài bạn đã học</span></div></section><div class="section-title"><div><span class="eyebrow">BƯỚC TIẾP THEO</span><h2>${progress.lastLesson ? 'Trở lại mạch học của bạn' : 'Xây nền ở ba kỹ năng cốt lõi'}</h2></div><a href="#library">Tất cả bài học ↗</a></div><div class="card-grid">${(progress.lastLesson ? [next, ...picks.filter(l => l.id !== next.id).slice(0,2)] : picks).map(card).join('')}</div><div class="notice"><strong>Cách học một bài:</strong> đọc phần giảng → tự thử ví dụ → đối chiếu từng bước → làm bài tập → ghi lại nguyên nhân sai. “Đã học” là trạng thái bạn tự đánh dấu; kết quả bài tập được lưu riêng.</div><div class="section-title"><h2>Ôn đúng chỗ đang vướng</h2><a href="#review">Mở sổ lỗi ↗</a></div><div class="topic-chips">${mistakes().length ? linkChips([...new Set(mistakes().map(q => q.lessonId))].slice(0,8)) : '<p>Chưa có câu sai được ghi nhận. Kết quả đầu tiên sẽ xuất hiện sau khi bạn luyện tập.</p>'}</div>`;
  }
  function options(object, selected, first = 'Tất cả') { return `<option value="all"${selected === 'all' ? ' selected' : ''}>${first}</option>` + Object.entries(object).map(([value,label]) => `<option value="${value}"${selected === value ? ' selected' : ''}>${esc(label)}</option>`).join(''); }
  function library() {
    const f = ui.library;
    return header('BÀI GIẢNG · VÍ DỤ · THỰC HÀNH','Thư viện kiến thức.','Chọn nhánh và độ khó phù hợp. Các bài chuyên sâu có điều kiện học trước; bạn luôn có thể mở lại bài nền tảng từ bên trong bài học.') + `<div class="filters"><label>Tìm chủ đề<input id="search" type="search" placeholder="Ví dụ: phần trăm, inference, DS…" value="${esc(f.query)}"></label><label>Nhánh kiến thức<select id="sectionFilter">${options(sections,f.section)}</select></label><label>Độ khó<select id="levelFilter">${options(levels,f.level)}</select></label><label>Trạng thái<select id="statusFilter">${options({new:'Chưa học',done:'Đã học',review:'Có câu cần ôn'},f.status)}</select></label></div><div id="libraryResults"></div>`;
  }
  function normalize(text) { return String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d'); }
  function renderLibraryResults() {
    const f = ui.library;
    const selected = C.order.map(id => C.byId[id]).filter(lesson => {
      const done = progress.completed.includes(lesson.id);
      const needsReview = questionsFor(lesson.id).some(q => progress.attempts[q.id] && !progress.attempts[q.id].correct);
      const text = [lesson.title,lesson.description,...C.plans[lesson.id].blocks.map(block => block[0])].join(' ');
      return (f.section === 'all' || f.section === lesson.section) && (f.level === 'all' || f.level === lesson.level) && (f.status === 'all' || (f.status === 'done' && done) || (f.status === 'new' && !done) || (f.status === 'review' && needsReview)) && normalize(text).includes(normalize(f.query.trim()));
    });
    $('#libraryResults').innerHTML = `<p class="result-count">${selected.length} / ${C.lessons.length} bài · xếp theo mạch học trong từng nhánh</p><div class="card-grid">${selected.length ? selected.map(card).join('') : '<div class="empty"><h3>Chưa có bài phù hợp</h3><p>Thử từ khóa ngắn hơn hoặc bỏ bớt bộ lọc.</p><button class="button outline" data-clear-filters>Xóa bộ lọc</button></div>'}</div>`;
  }
  function roadmap() {
    return header('CHỌN NHÁNH · XÂY NỀN · KẾT NỐI','Mạng lưới bài học.','Mỗi nhánh đi từ nền tảng đến các chuyên đề vận dụng. Bạn có thể học ba nhánh song song; mở một bài để xem chính xác kỹ năng cần học trước và các ứng dụng liên quan.') + C.tracks.map(track => {
      const required = track.lessons.filter(id => !C.byId[id].optional);
      const count = required.filter(id => progress.completed.includes(id)).length;
      return `<section class="roadmap-track"><div class="track-heading"><div><span class="eyebrow">${esc(sections[track.section])}</span><h2>${esc(track.title)}</h2><small>${count} / ${required.length} bài chính đã học</small></div><span class="count-badge">${Math.round(count / required.length * 100)}%</span></div><div class="track-grid">${track.lessons.map((id,index) => { const lesson = C.byId[id]; return `<a href="${href(id)}" class="track-node ${progress.completed.includes(id) ? 'done' : ''}"><b>${String(index+1).padStart(2,'0')}</b><span><strong>${esc(lesson.title)}</strong><small>${esc(levels[lesson.level])}${lesson.optional ? ' · Bổ trợ' : ''}${progress.completed.includes(id) ? ' · ✓ Đã học' : ''}</small></span></a>`; }).join('')}</div></section>`;
    }).join('');
  }
  function tableHtml(table) { if (!table) return ''; return `<div class="table-scroll"><table><caption>${esc(table.caption || 'Dữ liệu bài học')}</caption><thead><tr>${table.headers.map(head => `<th scope="col">${esc(head)}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; }
  function reader(id) {
    const lesson = C.byId[id];
    if (!lesson) return '<div class="empty"><h1>Không tìm thấy bài học</h1><p>Liên kết có thể đã cũ.</p><a class="button" href="#library">Về thư viện</a></div>';
    const plan = C.plans[id], questions = questionsFor(id), track = C.tracks.find(t => t.lessons.includes(id));
    const idx = track.lessons.indexOf(id), previous = track.lessons[idx-1], next = track.lessons[idx+1];
    progress.lastLesson = id; save();
    const prerequisites = C.prerequisites[id] || [];
    const related = [...new Set([...(C.crossLinks[id] || []), ...(next ? [next] : [])])];
    const refs = (plan.sourceRefs || []).map(ref => `<li>${esc(ref.book)}${ref.pages ? ' · trang PDF ' + esc(ref.pages) : ''}${ref.label ? ' · ' + esc(ref.label) : ''}</li>`).join('');
    return `<a class="reader-back" href="#library">← Trở về thư viện bài học</a><div class="reader-layout"><article class="reader-main"><header class="reader-heading"><span class="eyebrow">${esc(sections[lesson.section])} / ${esc(levels[lesson.level])}${lesson.optional ? ' / BỔ TRỢ' : ''}</span><h1>${esc(lesson.title)}</h1><p>${esc(lesson.modalDescription || lesson.description)}</p><div class="reader-meta"><span>${esc(lesson.duration)}</span><span>${plan.blocks.length} phần giảng</span><span>${examplesFor(plan).length} ví dụ</span><span>${questions.length} câu luyện tập</span></div></header><section class="goals"><h2>Sau bài này, bạn có thể</h2><ul>${plan.goals.map(goal => `<li>${esc(goal)}</li>`).join('')}</ul></section><div class="connections">${prerequisites.length ? `<div><strong>KIẾN THỨC CẦN HỌC TRƯỚC</strong><div class="topic-chips">${linkChips(prerequisites)}</div></div>` : ''}<div><strong>LIÊN KẾT & ỨNG DỤNG</strong><div class="topic-chips">${linkChips(related)}</div></div></div><section id="concepts" class="reader-block"><h2>01 / Hiểu bản chất</h2>${plan.blocks.map(([title,body],index) => `<section class="concept"><span class="eyebrow">CONCEPT ${String(index+1).padStart(2,'0')}</span><h3>${esc(title)}</h3><p class="prose">${esc(body)}</p></section>`).join('')}${tableHtml(plan.table)}</section><section id="examples" class="reader-block"><h2>02 / Ví dụ giải từng bước</h2>${examplesFor(plan).map((example,index) => `<article class="worked"><span class="eyebrow">VÍ DỤ ${String(index+1).padStart(2,'0')}</span><p class="example-question prose">${esc(example.question)}</p><ol>${example.steps.map(step => `<li class="prose">${esc(step)}</li>`).join('')}</ol><div class="worked-answer"><strong>Kết luận</strong><p class="prose">${esc(example.answer)}</p></div></article>`).join('')}</section><section id="traps" class="reader-block"><h2>03 / Nhận diện bẫy</h2><div class="trap-list">${plan.traps.map(trap => `<div class="trap"><b>!</b><p>${esc(trap)}</p></div>`).join('')}</div></section><section id="exercises" class="reader-block"><h2>04 / Tự luyện & kiểm tra</h2><p class="answer-note">Đọc đề, ghi lời giải của bạn rồi mới kiểm tra. Mỗi câu lưu cả kết quả lần đầu và lần gần nhất. Các dạng nhiều lựa chọn/nhập số là bài luyện kỹ năng, không phải mô phỏng giao diện thi thật.</p>${questions.map(q => questionHtml(q)).join('')}</section><section id="summary" class="reader-block"><h2>05 / Mang theo sau bài học</h2><div class="summary-box"><ul>${(plan.summary || plan.goals).map(item => `<li>${esc(item)}</li>`).join('')}</ul><p>Tự giải thích lại các ý trên mà không nhìn bài, rồi thử một câu mới vào buổi học sau.</p></div></section><section class="source-box"><strong>Nguồn khái niệm & đọc thêm</strong><p>${esc(plan.source || 'Official Guide 2025–2026 và tài liệu tham khảo tương ứng trong bản đồ nguồn.')}</p>${refs ? '<ul>' + refs + '</ul>' : ''}<p>Phần giảng, ví dụ và bài tập được biên soạn lại để học chủ động. Số trang PDF (nếu có) là trang trong tệp, có thể khác số trang in.</p><a href="#sources">Xem phạm vi khóa học và bản đồ nguồn ↗</a></section><div class="reader-bottom">${previous ? `<a class="button outline" href="${href(previous)}">← Bài trước</a>` : '<span></span>'}${next ? `<a class="button" href="${href(next)}">Bài tiếp theo →</a>` : '<a class="button" href="#practice">Chuyển sang luyện tập →</a>'}</div></article><aside class="reader-aside"><span class="eyebrow">TRONG BÀI HỌC</span><nav aria-label="Mục lục bài học"><a href="#concepts" data-anchor="concepts">01 · Bản chất</a><a href="#examples" data-anchor="examples">02 · Ví dụ</a><a href="#traps" data-anchor="traps">03 · Bẫy thường gặp</a><a href="#exercises" data-anchor="exercises">04 · Tự luyện</a><a href="#summary" data-anchor="summary">05 · Ghi nhớ</a></nav><button class="button primary" data-complete="${id}">${progress.completed.includes(id) ? '✓ Đã học · bỏ đánh dấu' : 'Đánh dấu đã học ✓'}</button><button class="button outline" data-drill-lesson="${id}">Luyện riêng bài này</button><p>Đánh dấu sau khi bạn đã đọc và tự giải thích được kiến thức. Độ chính xác được theo dõi ở bài tập.</p></aside></div>`;
  }
  function questionHtml(question, session = false) {
    const revealed = ui.revealed.get(question.id);
    const previous = progress.attempts[question.id];
    const key = 'q-' + question.id.replace(/[^a-z0-9-]/gi, '-');
    const optionsHtml = (question.options || []).map((option,index) => {
      const correct = question.mode === 'multi' ? question.answer.includes(index) : question.answer === index;
      const selected = revealed && (Array.isArray(revealed.answer) ? revealed.answer.includes(index) : revealed.answer === index);
      const cls = revealed ? correct ? ' correct' : selected ? ' incorrect' : '' : '';
      return `<label class="option${cls}"><input type="${question.mode === 'multi' ? 'checkbox' : 'radio'}" name="${key}" value="${index}"${selected ? ' checked' : ''}${revealed ? ' disabled' : ''}><span>${String.fromCharCode(65+index)}. ${esc(option)}</span></label>`;
    }).join('');
    return `<article class="question" data-question="${esc(question.id)}"><div class="question-header"><span>${session ? esc(sections[question.section]) : 'CÂU ' + String(question.index+1).padStart(2,'0')} · ${esc(levels[question.level] || question.level)}</span><span>${previous ? (previous.firstCorrect ? 'LẦN ĐẦU ĐÚNG' : 'LẦN ĐẦU SAI') + ' · ' + previous.count + ' LẦN' : 'CHƯA LÀM'}</span></div><div class="question-prompt">${esc(question.prompt)}</div>${tableHtml(question.table)}${question.mode === 'multi' ? '<p class="answer-note">Chọn tất cả đáp án đúng.</p>' : ''}${question.mode === 'numeric' ? `<label class="form-label" for="${key}">Đáp án số (dấu phẩy hoặc dấu chấm thập phân; có thể nhập phân số)<input id="${key}" type="text" name="numeric" autocomplete="off" placeholder="Ví dụ: 0,5 hoặc 1/2"${revealed ? ' disabled value="' + esc(revealed.answer) + '"' : ''}></label>` : `<div class="options">${optionsHtml}</div>`}${question.hint ? `<details class="hint"><summary>Xem gợi ý</summary><p>${esc(question.hint)}</p></details>` : ''}<div class="answer-controls">${!revealed ? `<button class="button small" data-check="${esc(question.id)}">Kiểm tra đáp án</button>` : `<button class="button small outline" data-retry="${esc(question.id)}">Làm lại câu này</button>`}</div>${revealed ? feedbackHtml(question,revealed) : ''}</article>`;
  }
  function answerLabel(question) { if (question.mode === 'numeric') return String(question.answer); const indices = Array.isArray(question.answer) ? question.answer : [question.answer]; return indices.map(index => String.fromCharCode(65+index) + '. ' + question.options[index]).join('; '); }
  function feedbackHtml(question, revealed) {
    const record = progress.attempts[question.id];
    return `<div class="feedback ${revealed.correct ? 'correct' : ''}" role="status"><strong>${revealed.correct ? '✓ Chính xác' : '↻ Cần xem lại'} · Đáp án: ${esc(answerLabel(question))}</strong><p class="prose">${esc(question.why)}</p>${!revealed.correct ? '<p>Câu này đã được thêm vào Sổ lỗi. Làm đúng ở lần sau để chuyển sang nhóm đã sửa.</p>' : ''}</div><div class="review-tools"><label>Ghi lại cách nghĩ / bước cần sửa<textarea data-note="${esc(question.id)}" placeholder="Ví dụ: đã lấy sai mẫu số khi tính phần trăm…">${esc(record?.note || '')}</textarea></label>${!revealed.correct ? `<label>Nguyên nhân chính<select data-cause="${esc(question.id)}">${Object.entries({'':'Chọn nguyên nhân',concept:'Chưa hiểu kiến thức',model:'Lập mô hình / suy luận',reading:'Đọc nhầm dữ kiện',calculation:'Tính toán',timing:'Thời gian / đoán'}).map(([value,label]) => `<option value="${value}"${record?.cause === value ? ' selected' : ''}>${label}</option>`).join('')}</select></label>` : ''}</div>`;
  }
  function parseNumber(raw) {
    const value = String(raw).trim().replace(/−/g,'-').replace(/\s+/g,'');
    if (/^[+-]?\d+(?:[.,]\d+)?\/[+-]?\d+(?:[.,]\d+)?$/.test(value)) { const [a,b] = value.split('/').map(x => Number(x.replace(',','.'))); return b ? a/b : NaN; }
    if (/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(value)) return Number(value.replace(',','.'));
    return NaN;
  }
  function submit(questionId) {
    const question = questionById[questionId];
    const element = document.querySelector(`[data-question="${questionId}"]`);
    if (!question || !element || ui.revealed.has(questionId)) return;
    let answer, correct;
    if (question.mode === 'numeric') {
      answer = element.querySelector('input[name="numeric"]').value.trim();
      const actual = parseNumber(answer), expected = parseNumber(question.answer);
      if (!Number.isFinite(actual)) { toast('Nhập một số hợp lệ, ví dụ 0,5 hoặc 1/2.'); return; }
      correct = Number.isFinite(expected) && Math.abs(actual-expected) <= (question.tolerance ?? 1e-7) * Math.max(1,Math.abs(expected));
    } else {
      const chosen = [...element.querySelectorAll('input:checked')].map(input => Number(input.value));
      if (!chosen.length) { toast('Hãy chọn đáp án trước khi kiểm tra.'); return; }
      answer = question.mode === 'multi' ? chosen : chosen[0];
      correct = question.mode === 'multi' ? chosen.length === question.answer.length && chosen.every(index => question.answer.includes(index)) : answer === question.answer;
    }
    const revealed = { answer, correct };
    ui.revealed.set(questionId, revealed);
    const old = progress.attempts[questionId];
    progress.attempts[questionId] = { correct, firstCorrect: old ? old.firstCorrect : correct, at: Date.now(), count: (old?.count || 0)+1, elapsed: Math.round((Date.now()-ui.renderedAt)/1000), note: old?.note || '', cause: old?.cause || '' };
    if (route.view === 'practice' && ui.session) {
      if (!ui.session.results[questionId]) ui.session.results[questionId] = { correct };
      ui.session.responses[questionId] = revealed;
    }
    save();
    element.outerHTML = questionHtml(question, route.view === 'practice');
    if (route.view === 'practice') updateSessionControls();
  }
  function practice() {
    return header('LUYỆN CÓ MỤC TIÊU','Phòng luyện tập.','Chọn nhánh, độ khó và số câu. Đây là bài luyện kỹ năng tự biên soạn, không phải đề thi thích ứng hay công cụ quy đổi điểm GMAT.') + `<section class="practice-config"><div class="filters"><label>Nhánh<select id="practiceSection">${options(sections,ui.practice.section)}</select></label><label>Độ khó<select id="practiceLevel">${options(levels,ui.practice.level)}</select></label><label>Số câu<select id="practiceCount">${[5,10,15,20].map(n => `<option${String(n) === ui.practice.count ? ' selected' : ''}>${n}</option>`).join('')}</select></label><label>Nguồn câu<select id="practiceMode">${Object.entries({all:'Toàn bộ ngân hàng',new:'Chưa làm',wrong:'Câu cần ôn'}).map(([value,label]) => `<option value="${value}"${ui.practice.mode === value ? ' selected' : ''}>${label}</option>`).join('')}</select></label></div><div class="actions"><button class="button" data-start-session>Bắt đầu bộ câu mới ↗</button><span class="result-count" id="poolCount"></span></div></section><div id="practiceRun" class="practice-run"></div>`;
  }
  function pool() { return C.questions.filter(q => (ui.practice.section === 'all' || q.section === ui.practice.section) && (ui.practice.level === 'all' || q.level === ui.practice.level) && (ui.practice.mode === 'all' || (ui.practice.mode === 'new' && !progress.attempts[q.id]) || (ui.practice.mode === 'wrong' && progress.attempts[q.id] && !progress.attempts[q.id].correct))); }
  function updatePool() { const count = pool().length; $('#poolCount').textContent = `${count} câu phù hợp · bộ mới tối đa ${Math.min(count, Number(ui.practice.count))} câu`; }
  function shuffled(array) { const result = [...array]; for (let i=result.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; } return result; }
  function startSession(ids) {
    const questions = ids ? ids.map(id => questionById[id]).filter(Boolean) : shuffled(pool()).slice(0,Number(ui.practice.count));
    if (!questions.length) { toast('Không có câu phù hợp. Hãy đổi bộ lọc.'); return; }
    ui.session = { ids: questions.map(q => q.id), index:0, startedAt:Date.now(), results:{}, responses:{}, finished:false };
    questions.forEach(q => ui.revealed.delete(q.id));
    if (route.view !== 'practice') location.hash = 'practice'; else renderSession();
  }
  function clockText(seconds) { return String(Math.floor(seconds/60)).padStart(2,'0') + ':' + String(seconds%60).padStart(2,'0'); }
  function renderSession() {
    clearInterval(ticker);
    const session = ui.session;
    if (!session) { $('#practiceRun').innerHTML = '<div class="empty"><h3>Sẵn sàng cho một bộ câu ngắn?</h3><p>Kết quả từng câu được lưu ngay sau khi bạn kiểm tra đáp án.</p></div>'; return; }
    if (session.finished) {
      const correct = Object.values(session.results).filter(r => r.correct).length;
      const wrong = session.ids.filter(id => !session.results[id]?.correct);
      $('#practiceRun').innerHTML = `<section class="session-result"><span class="eyebrow lime">BỘ LUYỆN TẬP HOÀN TẤT</span><h2>${correct} / ${session.ids.length} câu đúng lần đầu trong bộ</h2><p>Thời gian đã trôi qua: ${clockText(Math.round((session.endedAt-session.startedAt)/1000))}. Kết quả này phản ánh bộ câu vừa làm, không phải điểm GMAT dự đoán.</p><div class="actions"><a class="button primary" href="#review">Mở sổ lỗi ↗</a><button class="button outline" style="color:white" data-start-session>Bộ câu mới</button></div></section><h3>Những bài nên xem lại</h3><div class="topic-chips" style="margin-top:18px">${wrong.length ? linkChips([...new Set(wrong.map(id => questionById[id].lessonId))]) : '<p>Bạn đã trả lời đúng toàn bộ câu trong bộ này. Hãy tăng độ khó hoặc thử nhánh khác.</p>'}</div>`;
      return;
    }
    ui.renderedAt = Date.now();
    const question = questionById[session.ids[session.index]];
    if (session.responses[question.id]) ui.revealed.set(question.id,session.responses[question.id]);
    $('#practiceRun').innerHTML = `<div class="session-bar"><div><strong>Câu ${session.index+1} / ${session.ids.length}</strong><br><small>Đọc kỹ dữ kiện trước khi chọn đáp án.</small></div><span class="timer" id="sessionTimer" aria-label="Thời gian đã trôi qua">${clockText(Math.floor((Date.now()-session.startedAt)/1000))}</span></div><progress max="${session.ids.length}" value="${session.index}">${session.index}/${session.ids.length}</progress>${questionHtml(question,true)}<div class="actions"><button class="button" id="sessionNext" data-session-next disabled>${session.index === session.ids.length-1 ? 'Xem kết quả bộ câu' : 'Câu tiếp theo →'}</button><a class="button outline" href="${href(question.lessonId)}">Xem bài giảng liên quan ↗</a></div>`;
    ticker = setInterval(() => { if ($('#sessionTimer')) $('#sessionTimer').textContent = clockText(Math.floor((Date.now()-session.startedAt)/1000)); },1000);
    updateSessionControls();
  }
  function updateSessionControls() { if ($('#sessionNext') && ui.session) $('#sessionNext').disabled = !ui.session.results[ui.session.ids[ui.session.index]]; }
  function review() {
    const records = Object.values(progress.attempts), wrong = mistakes();
    const firstCorrect = records.filter(r => r.firstCorrect).length;
    const fixed = records.filter(r => !r.firstCorrect && r.correct).length;
    return header('TỪ LỖI SAI ĐẾN KỸ NĂNG','Sổ lỗi & ôn tập.','Mỗi lỗi cần một nguyên nhân cụ thể. Làm lại câu sai, viết bước bạn đã sửa và quay lại bài giảng khi còn vướng ở bản chất.') + `<section class="stats"><div class="stat"><strong>${records.length}</strong><span>câu đã thử</span></div><div class="stat"><strong>${records.length ? Math.round(firstCorrect/records.length*100)+'%' : '—'}</strong><span>đúng ở lần đầu</span></div><div class="stat"><strong>${wrong.length}</strong><span>câu còn cần ôn</span></div><div class="stat"><strong>${fixed}</strong><span>câu sai đã sửa được</span></div></section><div class="actions" style="margin-bottom:24px"><button class="button" data-review-wrong${wrong.length ? '' : ' disabled'}>Luyện lại câu sai ↻</button></div>${wrong.length ? wrong.sort((a,b) => progress.attempts[b.id].at-progress.attempts[a.id].at).map(q => { const record=progress.attempts[q.id]; return `<article class="review-row"><span class="eyebrow">${esc(sections[q.section])} · ${esc(levels[q.level])}</span><h3>${esc(C.byId[q.lessonId].title)}</h3><p>${esc(q.prompt)}</p><div class="review-meta">Đã làm ${record.count} lần · ${new Date(record.at).toLocaleDateString('vi-VN')}${record.note ? '<br>Ghi chú: ' + esc(record.note) : ''}</div><div class="actions"><button class="button small" data-review-question="${q.id}">Tự giải lại</button><a class="button small outline" href="${href(q.lessonId)}">Ôn bài giảng ↗</a></div></article>`; }).join('') : '<div class="empty"><h3>Chưa có câu cần ôn</h3><p>' + (records.length ? 'Các câu đã thử hiện đều có kết quả gần nhất đúng.' : 'Hãy làm bài tập để bắt đầu theo dõi cách bạn tiến bộ.') + '</p><a class="button" href="#practice">Vào phòng luyện tập</a></div>'}<section class="data-actions"><h3>Mang theo tiến độ của bạn</h3><div class="actions" style="margin-top:15px"><button class="button outline" data-export>Xuất tiến độ (.json)</button><button class="button outline" data-import>Nhập tiến độ</button></div><p>Tiến độ được lưu trong trình duyệt này. Xuất tệp để chuyển sang trình duyệt hoặc máy khác. Nhập tệp sẽ hợp nhất kết quả, ưu tiên bản ghi mới hơn.</p></section>`;
  }
  function sources() {
    return header('PHẠM VI · NGUỒN · CÁCH SỬ DỤNG','Biết mình đang học gì.','Khóa học được phát triển từ bản đồ tài liệu GMAT sẵn có và bổ sung phần giảng, ví dụ, câu hỏi mới.') + `<div class="source-list"><h2>Phạm vi kỳ thi</h2><p>Ba nhánh chính là Quantitative Reasoning, Verbal Reasoning và Data Insights. Nội dung định hướng được đối chiếu ngày 12/11/2026 với <a href="https://www.mba.com/exams/gmat-exam/about/exam-structure" target="_blank" rel="noopener">cấu trúc kỳ thi chính thức</a> và <a href="https://www.mba.com/exams/gmat-exam/about/exam-content" target="_blank" rel="noopener">phạm vi nội dung từ GMAC</a>.</p><p>Quant luyện số học và đại số; Verbal luyện Critical Reasoning và Reading Comprehension; DI luyện tính đủ dữ kiện, bảng, biểu đồ, phân tích hai phần và nhiều nguồn. Bài Geometry được giữ làm bổ trợ, không là điều kiện bắt buộc của lộ trình chính. Sentence Correction và AWA không nằm trong khóa học chính.</p><h2>Cách biên soạn</h2><p>Official Guide 2025–2026 và các tập Quantitative, Verbal, Data Insights Review là khung tham khảo. Manhattan Prep, PowerScore và các sách khác trong kho hỗ trợ giải thích khái niệm. Mỗi bài chỉ rõ nguồn; các trang PDF được ghi khi đã đối chiếu trực tiếp.</p><p>Các bài tập mới dùng tình huống và dữ kiện tự biên soạn. Bài luyện nhiều đáp án hoặc nhập số phục vụ kiểm tra kỹ năng; giao diện này không mô phỏng đầy đủ kỳ thi thật. Độ khó là nhãn biên soạn, chưa được chuẩn hóa bằng dữ liệu thí sinh. Không quy đổi phần trăm đúng thành điểm GMAT.</p><h2>Dữ liệu học tập</h2><p>“Đã học” là đánh dấu thủ công. Kết quả luyện tập lưu lần đầu, lần gần nhất và số lần làm. Sổ lỗi chứa các câu có kết quả gần nhất sai. Bạn có thể ghi nguyên nhân và xuất tiến độ ở trang Sổ lỗi. Không cần tài khoản; website hoạt động trên máy và không gửi tiến độ lên máy chủ.</p><div class="actions"><a class="button outline" href="CURRICULUM.md">Chương trình chi tiết ↗</a><a class="button outline" href="SOURCE-MAP.md">Bản đồ 19 tài liệu gốc ↗</a><a class="button outline" href="README.md">Hướng dẫn sử dụng ↗</a></div></div>`;
  }
  function render() {
    clearInterval(ticker);
    const hash = location.hash.slice(1) || 'home';
    const [view, id] = hash.split('/');
    let lessonId = '';
    try { lessonId = decodeURIComponent(id || ''); } catch { /* Invalid URL: show the missing-lesson message. */ }
    route = { view: ['home','library','roadmap','lesson','practice','review','sources'].includes(view) ? view : 'home', id: lessonId };
    ui.revealed.clear();
    ui.renderedAt = Date.now();
    document.querySelectorAll('[data-nav]').forEach(a => { const active=a.dataset.nav === (route.view === 'lesson' ? 'library' : route.view); a.classList.toggle('active',active); if(active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
    const labels={home:'Tổng quan',library:'Thư viện',roadmap:'Mạng lưới bài học',lesson:'Bài học',practice:'Luyện tập',review:'Sổ lỗi',sources:'Nguồn & phạm vi'};
    $('#pageLabel').textContent = labels[route.view];
    document.title = (route.view === 'lesson' && C.byId[route.id] ? C.byId[route.id].title : labels[route.view]) + ' · GMAT//LAB';
    const views = {home, library, roadmap, lesson:() => reader(route.id), practice, review, sources};
    $('#main').innerHTML = views[route.view]();
    if (route.view === 'library') renderLibraryResults();
    if (route.view === 'practice') { updatePool(); renderSession(); }
    updateSidebar();
    window.scrollTo(0,0);
  }
  document.addEventListener('click', event => {
    const button=event.target.closest('button,a[data-anchor]'); if (!button) return;
    if (button.dataset.anchor) { event.preventDefault(); document.getElementById(button.dataset.anchor)?.scrollIntoView({behavior:'smooth'}); return; }
    if (button.dataset.check) submit(button.dataset.check);
    if (button.dataset.retry) { ui.revealed.delete(button.dataset.retry); if(route.view==='practice' && ui.session) delete ui.session.responses[button.dataset.retry]; const element=button.closest('.question'); element.outerHTML=questionHtml(questionById[button.dataset.retry],route.view==='practice'); ui.renderedAt=Date.now(); }
    if (button.dataset.complete) { const id=button.dataset.complete; progress.completed=progress.completed.includes(id) ? progress.completed.filter(value=>value!==id) : [...progress.completed,id]; save(); button.textContent=progress.completed.includes(id) ? '✓ Đã học · bỏ đánh dấu' : 'Đánh dấu đã học ✓'; toast('Đã cập nhật trạng thái bài học.'); }
    if (button.hasAttribute('data-clear-filters')) { ui.library={query:'',section:'all',level:'all',status:'all'}; render(); }
    if (button.hasAttribute('data-start-session')) startSession();
    if (button.dataset.drillLesson) startSession(questionsFor(button.dataset.drillLesson).map(q=>q.id));
    if (button.hasAttribute('data-session-next')) { const s=ui.session; if (!s?.results[s.ids[s.index]]) return; if(s.index<s.ids.length-1) s.index++; else {s.finished=true;s.endedAt=Date.now();} renderSession(); $('#practiceRun').scrollIntoView({behavior:'smooth'}); }
    if (button.hasAttribute('data-review-wrong')) startSession(mistakes().map(q=>q.id).slice(0,20));
    if (button.dataset.reviewQuestion) startSession([button.dataset.reviewQuestion]);
    if (button.hasAttribute('data-export')) { const blob=new Blob([JSON.stringify(progress,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='gmat-lab-progress-'+new Date().toISOString().slice(0,10)+'.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000); toast('Đã xuất tệp tiến độ.'); }
    if (button.hasAttribute('data-import')) $('#importFile').click();
  });
  document.addEventListener('input', event => {
    const target=event.target;
    if(target.id==='search') {ui.library.query=target.value;renderLibraryResults();}
    if(target.dataset.note && progress.attempts[target.dataset.note]) {progress.attempts[target.dataset.note].note=target.value.slice(0,2000);save();}
  });
  document.addEventListener('change', async event => {
    const target=event.target;
    const libraryFields={sectionFilter:'section',levelFilter:'level',statusFilter:'status'};
    if(libraryFields[target.id]) {ui.library[libraryFields[target.id]]=target.value;renderLibraryResults();}
    const practiceFields={practiceSection:'section',practiceLevel:'level',practiceCount:'count',practiceMode:'mode'};
    if(practiceFields[target.id]) {ui.practice[practiceFields[target.id]]=target.value;updatePool();}
    if(target.dataset.cause && progress.attempts[target.dataset.cause]) {progress.attempts[target.dataset.cause].cause=target.value;save();}
    if(target.id==='importFile') {
      const file=target.files[0]; if(!file) return;
      try { if(file.size>5*1024*1024) throw new Error('Tệp quá lớn.'); const raw=JSON.parse(await file.text()); if(raw.version!==3 || !Array.isArray(raw.completed) || !raw.attempts || typeof raw.attempts!=='object') throw new Error('Tệp không đúng định dạng tiến độ GMAT//LAB.'); const imported=cleanProgress(raw); progress.completed=[...new Set([...progress.completed,...imported.completed])]; for(const [id,record] of Object.entries(imported.attempts)) if(!progress.attempts[id] || record.at>progress.attempts[id].at) progress.attempts[id]=record; if(!progress.lastLesson) progress.lastLesson=imported.lastLesson; save(); render(); toast('Đã hợp nhất tiến độ từ tệp.'); } catch(error) {toast('Không thể nhập: '+error.message);} target.value='';
    }
  });
  window.addEventListener('hashchange',render);
  window.addEventListener('storage',event=>{if(event.key===storageKey){progress=cleanProgress(readStored(storageKey,progress));updateSidebar();}});
  render();
})();
