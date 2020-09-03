export const compareTime = (a, b) => {
  if (a.time > b.time) {
    return -1;
  }
  if (a.time < b.time) {
    return 1;
  }
  return 0;
};

export const compareTitle = (a, b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
};

export const compareDomain = (a, b) => {
  if (!a.domain || !b.domain) return 0;
  const domainA = a.domain.toUpperCase();
  const domainB = b.domain.toUpperCase();
  if (domainA < domainB) {
    return -1;
  }
  if (domainA > domainB) {
    return 1;
  }
  return 0;
};

export const isMobile = () => {
  if (window.innerWidth < 768) {
    return true;
  } else {
    return false;
  }
};
