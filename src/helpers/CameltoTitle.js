export const camelCaseToTitle = (camelCase) => {
  if (camelCase?.includes("_")) {
    return camelCase?.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase());
  } else {
    return camelCase
      ?.replace(/[0-9]{2,}/g, (match) => ` ${match} `)
      ?.replace(/[^A-Z0-9][A-Z]/g, (match) => `${match[0]} ${match[1]}`)
      ?.replace(
        /[A-Z][A-Z][^A-Z0-9]/g,
        (match) => `${match[0]} ${match[1]}${match[2]}`
      )
      ?.replace(/[ ]{2,}/g, (match) => " ")
      ?.replace(/\s./g, (match) => match.toUpperCase())
      ?.replace(/^./, (match) => match.toUpperCase())
      ?.trim();
  }

};
