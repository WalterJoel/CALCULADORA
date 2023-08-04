import{ar as a}from"./index.c83d97f5.js";const e=a`
  mutation CreateCapitalCall(
    $createCatmaecapitalcallInput: CreateCatmaecapitalcallInput!
  ) {
    createCapitalCall(
      createCatmaecapitalcallInput: $createCatmaecapitalcallInput
    ) {
      creationDate
      statusCapital
      # fondo
      # app
    }
  }
`;a`
  mutation UploadFile($file: Upload!, $fileName: String!) {
    uploadFile(file: $file, fileName: $fileName)
  }
`;const l=a`
  mutation UploadFiles(
    $files: [Upload!]!
    $idCapital: String!
    $photoUrl: String!
    $statusCapital: String!
  ) {
    uploadFiles(
      files: $files
      idCapital: $idCapital
      photoUrl: $photoUrl
      statusCapital: $statusCapital
    )
  }
`,i=a`
  mutation DeleteOneFile($deleteAlmmaefileInput: DeleteAlmmaefileInput!) {
    deleteOneFile(deleteAlmmaefileInput: $deleteAlmmaefileInput) {
      fileName
      idCapitalCall
      realId
    }
  }
`,n=a`
  mutation InsertNewComment($updateAlmmaefileInput: UpdateAlmmaefileInput!) {
    insertNewComment(updateAlmmaefileInput: $updateAlmmaefileInput) {
      fileName
      idCapitalCall
      thread {
        messageThread
        userName
        id
        photoUrl
      }
    }
  }
`,p=a`
  mutation UpdateStage(
    $idCapital: String!
    $statusCapital: String!
    $stage: StageInput!
  ) {
    updateStage(
      idCapital: $idCapital
      statusCapital: $statusCapital
      stage: $stage
    ) {
      creationDate
    }
  }
`,u=a`
  mutation UpdateCapital(
    $updateCatmaecapitalcallInput: UpdateCatmaecapitalcallInput!
  ) {
    updateCapital(updateCatmaecapitalcallInput: $updateCatmaecapitalcallInput) {
      creationDate
    }
  }
`,d=a`
  mutation UpdateStatusCapital(
    $updateStatusCapitalInput: UpdateStatusCapitalInput!
  ) {
    updateStatusCapital(updateStatusCapitalInput: $updateStatusCapitalInput)
  }
`,s=a`
  mutation DeleteCapitalCall(
    $deleteCatmaecapitallcallInput: DeleteCatmaecapitalcallInput!
  ) {
    deleteCapitalCall(
      deleteCatmaecapitallcallInput: $deleteCatmaecapitallcallInput
    ) {
      creationDate
    }
  }
`,C=`
query FindAllCapitallCallsByStatus($statusCapital: String!) {
  findAllCapitallCallsByStatus(statusCapital: $statusCapital) {
    applicationDate
    creationDate
    currencyFund
    executionDate
    fund
    managerFund
    capitalCallAmount
    society
    stage
    statusCapital
  }
}
`,o=`
query FindInfoCapital($findOneCapitalCall: FindOneCatmaecapitalcallInput!) {
  findInfoCapital(findOneCapitalCall: $findOneCapitalCall) {
    applicationDate
    areaResponsability
    bankAccount
    bankingCoordenatesFund
    capitalCallAmount
    classificationFund
    commitmentFund
    creationDate
    executionDate
    vintageFund
    statusCapital
    stage
    managerFund
    fund
    currencyFund
    participationPercentageFund
    society
    contactsFund
    applicationsFunds
    applicationsName
  }
}
`,c=`
query FindOneCapitalCall($findOneCapitalCall: FindOneCatmaecapitalcallInput!) {
  findOneCapitalCall(findOneCapitalCall: $findOneCapitalCall) {
    applicationDate
    areaResponsabilityId
    bankAccountId
    capitalCallAmount
    completedDate
    creationDate
    deletedDate
    executionDate
    fundId
    realPercentage
    stage {
      name
      id
    }
    statusCapital
    totalAmount
    unfunded
    applicationsId
    applicationsFunds
  }
}
`,r=`
query FindAnyAttributeCapital($findAnyAttributeCapital: FindOneCatmaecapitalcallInput!) {
  findAnyAttributeCapital(findAnyAttributeCapital: $findAnyAttributeCapital) {
    stage {
      id
      name
    }
  }
}
`,m=`
query FindAnyAttributeCapital($findAnyAttributeCapital: FindOneCatmaecapitalcallInput!) {
  findAnyAttributeCapital(findAnyAttributeCapital: $findAnyAttributeCapital) {
    historial {
      userName
      isNotification
      date
      comment
    }
  }
}
`,f=`
query FindFilesByCapitalId($capitalCallId: String!) {
  findFilesByCapitalId(capitalCallId: $capitalCallId) {
    fileName
    idCapitalCall
    realId
    thread {
      id
      messageThread
      userName
      photoUrl
    }
    photoUrl
  }
}
`,I=`query Query($realId: String!) {
  generateWebUrl(realId: $realId)
}
`,$=`query FindOneFile($findAlmmaefileInput: FindAlmmaefileInput!) {
  findOneFile(findAlmmaefileInput: $findAlmmaefileInput) {
    fileName
    idCapitalCall
    realId
    thread {
      userName
      messageThread
      id
      photoUrl
    }
    photoUrl
  }
}
`;export{l as a,i as b,e as c,s as d,I as e,d as f,C as g,p as h,f as i,n as j,$ as k,m as l,c as m,r as n,o,u};
