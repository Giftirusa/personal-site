export const ImagePaths = {
  backgroundPattern:
    "https://res.cloudinary.com/dmsic9qmj/image/upload/v1702114507/personal-site/background-pattern_hiax5m.svg",
}

export const SocialLinks = {
  github: "https://github.com/giftirusa",
  x: "https://twitter.com/giftirusa",
  linkedin: "https://www.linkedin.com/in/giftirusa/",
  behance: "https://www.behance.net/giftirusa",
  medium: "https://medium.com/@giftirusa",
  resume: "",
  mail: "mailto:giftirusa@gmail.com",
}

const isWindowDefined = typeof window !== "undefined"

const sessionStorageKeys = {
  loaded: "enipx-loaded",
}

type SessionStorageKeys = keyof typeof sessionStorageKeys

export const setSessionStorage = (key: SessionStorageKeys, value: any) => {
  if (isWindowDefined) {
    window.sessionStorage.setItem(sessionStorageKeys[key], value)
  }
}

export const getSessionStorage = (key: SessionStorageKeys) => {
  if (isWindowDefined) {
    return window.sessionStorage.getItem(sessionStorageKeys[key])
  }
}

export const removeSessionStorage = (key: SessionStorageKeys) => {
  if (isWindowDefined) {
    return window.sessionStorage.removeItem(sessionStorageKeys[key])
  }
}
