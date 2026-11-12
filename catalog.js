/* Assemble preserved lessons and authored extensions. No build or network needed. */
(() => {
  const base = window.GMAT_FOUNDATION;
  const lessons = [...base.lessons, ...(window.GMAT_EXTRA_LESSONS || [])];
  const plans = { ...base.plans, ...window.GMAT_EXTRA_PLANS };
  for (const [id, content] of Object.entries(window.GMAT_EXISTING_DEPTH || {})) Object.assign(plans[id], content);
  const tracks = window.GMAT_LEARNING_TRACKS.map(track => ({ ...track, lessons: [...track.lessons] }));
  const crossLinks = { ...window.GMAT_CROSS_LINKS };
  const prerequisites = {};
  for (const pack of window.GMAT_DEEP_PACKS || []) {
    lessons.push(...(pack.lessons || []));
    Object.assign(plans, pack.plans || {});
    Object.assign(prerequisites, pack.prerequisites || {});
    for (const [id, links] of Object.entries(pack.crossLinks || {})) crossLinks[id] = [...new Set([...(crossLinks[id] || []), ...links])];
    for (const [id, extra] of Object.entries(pack.enrichments || {})) {
      const plan = plans[id];
      if (!plan) throw new Error('Unknown enrichment: ' + id);
      for (const key of ['blocks', 'practice', 'workedExamples', 'sourceRefs']) plan[key] = [...(plan[key] || []), ...(extra[key] || [])];
      if (extra.summary) plan.summary = extra.summary;
    }
    for (const { id, after } of pack.placements || []) {
      const lesson = lessons.find(item => item.id === id);
      const track = tracks.find(item => item.section === lesson.section);
      const index = track.lessons.indexOf(after);
      if (index < 0) throw new Error('Unknown placement: ' + after);
      track.lessons.splice(index + 1, 0, id);
    }
  }
  const byId = Object.fromEntries(lessons.map(lesson => [lesson.id, lesson]));
  for (const track of tracks) {
    for (const lesson of lessons.filter(item => item.section === track.section)) {
      if (!track.lessons.includes(lesson.id)) track.lessons.push(lesson.id);
    }
  }
  // Geometry remains an optional supplement, never a required dependency.
  if (byId['geometry-coordinate']) byId['geometry-coordinate'].optional = true;
  // Put foundations first while respecting actual dependencies inside each branch.
  const levelRank = { Beginner: 0, Intermediate: 1, Advanced: 2 };
  for (const track of tracks) {
    const remaining = [...track.lessons], sorted = [];
    while (remaining.length) {
      const available = remaining.filter(id => !(prerequisites[id] || []).some(pre => remaining.includes(pre)));
      if (!available.length) throw new Error('Prerequisite cycle in ' + track.id);
      available.sort((a,b) => Number(!!byId[a].optional)-Number(!!byId[b].optional) || levelRank[byId[a].level]-levelRank[byId[b].level] || track.lessons.indexOf(a)-track.lessons.indexOf(b));
      sorted.push(available[0]); remaining.splice(remaining.indexOf(available[0]),1);
    }
    track.lessons = sorted;
  }
  const order = tracks.flatMap(track => track.lessons);
  const questions = lessons.flatMap(lesson => {
    const plan = plans[lesson.id];
    return [{ ...plan.check, mode: 'single' }, ...(plan.practice || [])].map((question, index) => ({
      ...question, mode: question.mode || 'single', id: lesson.id + ':' + index,
      lessonId: lesson.id, section: lesson.section, level: question.difficulty || lesson.level, index
    }));
  });
  window.GMAT_COURSE = { lessons, plans, tracks, byId, order, questions, prerequisites, crossLinks };
})();
