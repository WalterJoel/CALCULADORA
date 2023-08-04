const e=`
query FindAllUsers {
  findAllUsers {
    idUser
    nameUser
    emailUser
  }
}
`,s=`
query FindAllUsers {
  findAllUsers {
    emailUser
    idUser
    lastNameUser
    nameUser
    passwordUser
    phoneUser
    photoUser {
      realId
      photoUrl
    }
    profileId
    profileName
    statusUser
  }
}
`;export{e as a,s as g};
