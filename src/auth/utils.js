export const isValidToken = token => {
  let tok = token;
  return new Date(tok.exp * 1000) > new Date() ? tok : null;
};

export const initState = {
  user: localStorage.getItem("TOKEN") ? isValidToken(localStorage.getItem("TOKEN")) : null
};