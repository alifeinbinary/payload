import type { DefaultTranslationsObject, Language } from '../types.js'

export const myTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'အကောင့်',
    accountOfCurrentUser: 'သင့် အကောင့်',
    accountVerified: 'Akaun telah disahkan dengan jayanya.',
    alreadyActivated: 'အတည်ပြုပြီး',
    alreadyLoggedIn: 'ဝင်ရောက်ပြီးသား',
    apiKey: 'API Key',
    authenticated: 'အတည်ပြုပြီး',
    backToLogin: 'အကောင့်ထဲ ပြန်ဝင်မည်။',
    beginCreateFirstUser: 'စတင်နိုင်ရန် ပထမဦးစွာ အသုံးပြုသူအား ဖန်တီးပါ။',
    changePassword: 'စကားဝှက် ပြောင်းလဲမည်။',
    checkYourEmailForPasswordReset:
      'Jika alamat e-mel dikaitkan dengan akaun, anda akan menerima arahan untuk menetapkan semula kata laluan anda sebentar lagi. Sila semak folder spam atau junk mail anda jika anda tidak melihat e-mel di kotak masuk anda.',
    confirmGeneration: 'Generation အတည်ပြု',
    confirmPassword: 'စကားဝှက်အား ထပ်မံ ရိုက်ထည့်ပါ။',
    createFirstUser: 'ပထမဆုံး အသုံးပြုသူကို ဖန်တီးပါ။',
    emailNotValid: 'ထည့်သွင်းထားသော အီးမေလ်မှာ မှားယွင်းနေပါသည်။',
    emailOrUsername: 'E-mel atau Nama Pengguna',
    emailSent: 'မေးလ် ပို့ထားပါသည်။',
    emailVerified: 'အီးမေးလ်အတည်ပြုခဲ့ပါပြီ။',
    enableAPIKey: 'API Key ကိုဖွင့်ရန်',
    failedToUnlock: 'လော့ခ်ဖွင့်၍မရပါ။',
    forceUnlock: 'လော့ခ်ဖွင့်ရန်',
    forgotPassword: 'စကားဝှက် မေ့နေပါသလား။',
    forgotPasswordEmailInstructions:
      'ကျေးဇူးပြု၍ သင့်အီးမေးလ်ကို ထည့်သွင်းပါ။ သင့်စကားဝှက်ကို ပြန်လည်သတ်မှတ်နိုင်ရန် အီးမေးလ်စာတစ်စောင်ကို သင်လက်ခံရရှိမည်ဖြစ်သည်။',
    forgotPasswordQuestion: 'စကားဝှက် မေ့နေပါသလား။',
    forgotPasswordUsernameInstructions:
      'Sila masukkan nama pengguna anda di bawah. Arahan mengenai bagaimana untuk menetapkan semula kata laluan anda akan dihantar ke alamat emel yang dikaitkan dengan nama pengguna anda.',
    generate: 'Generate',
    generateNewAPIKey: 'API key အသစ်ဖန်တီးရန်',
    generatingNewAPIKeyWillInvalidate:
      'API ကီးအသစ်တစ်ခုကို ဖန်တီးခြင်းသည် ယခင်ကီးကို <1>တရားဝင်ခြင်းမရှိစေဘဲ</1> ဖြစ်လိမ့်မည်။ ဆက်လုပ်မှာတာ သေချာပါသလား။',
    lockUntil: 'Lock Until',
    logBackIn: 'အကောင့်ထဲ ပြန်ဝင်မည်။',
    loggedIn: 'အခြားအကောင့်နှင့် လော့ဂ်အင်ဝင်လိုပါက <0>လော့ဂ်အောက်</0> ပြုလုပ်ပါ။',
    loggedInChangePassword:
      'စကားဝှက် ပြောင်းလဲရန်အတွက်  သင့် <0>အကောင့်</0> သို့ဝင်ရောက်ပြီး ပြင်ဆင် သတ်မှတ်ပါ။',
    loggedOutInactivity: 'လုပ်ဆောင်ချက်မရှိခြင်းကြောင့် သင်သည် ထွက်လိုက်ပါသည်။',
    loggedOutSuccessfully: 'သင်သည် အောင်မြင်စွာ ထွက်ပြီးပါပြီ။',
    loggingOut: 'ထွက်မယ်...',
    login: 'အကောင့်ထဲ ဝင်မည်။',
    loginAttempts: 'လော့ဂ်အင် လုပ်ဆောင်ချက်များ',
    loginUser: 'လော့ဂ်အင် အသုံးပြုသူ',
    loginWithAnotherUser: 'အခြားအကောင့်နှင့် လော့ဂ်အင်ဝင်လိုပါက <0>လော့ဂ်အောက်</0> ပြုလုပ်ပါ။',
    logOut: 'အကောင့်ထဲက ထွက်မည်။',
    logout: 'အကောင့်မှ ထွက်မည်၊',
    logoutSuccessful: 'Log keluar berjaya.',
    logoutUser: 'လော့ဂ်အောက် အသုံးပြုသူ',
    newAccountCreated:
      '<a href="{{serverURL}}">{{serverURL}}</a> သို့ဝင်ရောက်ရန် သင့်အီးမေးလ်ကို အတည်ပြုရန်အတွက် အကောင့်အသစ်တစ်ခုကို ယခုလေးတင် ဖန်တီးပြီးပါပြီ။ ကျေးဇူးပြု၍ အောက်ပါလင့်ခ်ကို နှိပ်ပါ သို့မဟုတ် သင့်အီးမေးလ်ကို အတည်ပြုရန် ဖော်ပြပါ လင့်ခ်ကို သင့်ဘရောက်ဆာထဲသို့ ကူးထည့်ပါ- <a href="{{verificationURL}}">{{verificationURL}}</a><br> သင့်အီးမေးလ်ကို အတည်ပြုပြီးနောက်၊ သင်သည် အောင်မြင်စွာ လော့ဂ်အင်ဝင်နိုင်ပါမည်။',
    newAPIKeyGenerated: 'New API Key Generated.',
    newPassword: 'စကားဝှက် အသစ်',
    passed: 'အတည်ပြုချက် ကျောင်းပြန်',
    passwordResetSuccessfully: 'စကားဝှက် ပြန်လည်စစ်ဆင်မှု အောင်မြင်စွာ ပြီးစီးပါပြီ။',
    resetPassword: 'စကားဝှက် ပြန်လည်သတ်မှတ်',
    resetPasswordExpiration: 'စကားဝှက် ပြန်လည်သတ်မှတ်ရန် သတ်တမ်း',
    resetPasswordToken: 'စကားဝှက် တိုကင်အား ပြန်လည်သတ်မှတ်',
    resetYourPassword: 'သင့်စကားဝှက်ကို ပြန်လည်သတ်မှတ်ပါ။',
    stayLoggedIn: 'အကောင့်ထဲ ဝင်ထားသည်။',
    successfullyRegisteredFirstUser: 'Pendaftaran pengguna pertama berjaya.',
    successfullyUnlocked: 'အောင်မြင်စွာသော့ဖွင့်ခဲ့သည်။',
    tokenRefreshSuccessful: 'Token refresh berhasil.',
    unableToVerify: 'စိစစ်၍မရပါ။',
    username: 'Nama pengguna',
    usernameNotValid: 'ပေးထားသော အသုံးပြုသူအမည်မှာ တရားဝင်မှု မရှိပါ။',
    verified: 'စိစစ်ပြီး',
    verifiedSuccessfully: 'အတည်ပြုပြီးပါပြီ။',
    verify: 'စိစစ်ခြင်း',
    verifyUser: 'အသုံးပြုသူ စီစစ်ခြင်း',
    verifyYourEmail: 'သင့်အီးမေးလ်ကို အတည်ပြုပါ။',
    youAreInactive:
      'သင်သည် အချိန်အနည်းငယ်အတွင်း active မဖြစ်ပါက သင့်အကောင့် လုံခြုံရေးအတွက် မကြာမီ အလိုအလျောက် လော့ဂ်အောက်ဖြစ်ပါမည်။ အကောင့်ထဲ ဆက်နေလိုပါသလား။',
    youAreReceivingResetPassword:
      'သင့်အကောင့်အတွက် စကားဝှက်ကို ပြန်လည်သတ်မှတ်ရန် သင် (သို့မဟုတ် အခြားသူတစ်ဦးဦး) က တောင်းဆိုထားသောကြောင့်လက်ခံရရှိခြင်းဖြစ်သည်။ ကျေးဇူးပြု၍ အောက်ပါလင့်ခ်ကို နှိပ်ပါ (သို့မဟုတ်) ၎င်းကို သင့်ဘရောက်ဆာထဲသို့ ကူးထည့်ပါ။',
    youDidNotRequestPassword:
      'ယခု လုပ်ဆောင်ချက်ကို သင်မတောင်းဆိုထားပါက ဤအီးမေးလ်ကို လျစ်လျူရှုထားခြင်းဖြင့် သင့်စကားဝှက်သည် ပြောင်းလဲမည်မဟုတ်ပါ။',
  },
  error: {
    accountAlreadyActivated: 'ဤအကောင့်ကို အသက်သွင်းပြီးဖြစ်သည်။',
    autosaving: 'ဖိုင်ကို အလိုအလျောက်သိမ်းဆည်းရာတွင် ပြဿနာတစ်ခုရှိနေသည်။',
    correctInvalidFields: 'ကျေးဇူးပြု၍ အချက်အလက်များကို ပြန်လည် စစ်ဆေးပါ။',
    deletingFile: 'ဖိုင်ကိုဖျက်ရာတွင် အမှားအယွင်းရှိနေသည်။',
    deletingTitle:
      '{{title}} ကို ဖျက်ရာတွင် အမှားအယွင်းရှိခဲ့သည်။ သင့် အင်တာနက်လိုင်းအား စစ်ဆေးပြီး ထပ်မံကြို့စားကြည့်ပါ။',
    documentNotFound:
      'Dokumen dengan ID {{id}} tidak dapat ditemui. Ia mungkin telah dipadam atau tidak pernah wujud, atau anda mungkin tidak mempunyai akses kepadanya.',
    emailOrPasswordIncorrect: 'ထည့်သွင်းထားသော အီးမေးလ် သို့မဟုတ် စကားဝှက်သည် မမှန်ပါ။',
    followingFieldsInvalid_one: 'ထည့်သွင်းထားသော အချက်အလက်သည် မမှန်ကန်ပါ။',
    followingFieldsInvalid_other: 'ထည့်သွင်းထားသော အချက်အလက်များသည် မမှန်ကန်ပါ။',
    incorrectCollection: 'မှားယွင်းသော စုစည်းမှု',
    insufficientClipboardPermissions:
      'ကလစ်ဘုတ်ဝင်ရောက်ခွင့်ပြုချက်မရှိပါ။ ကလစ်ဘုတ်ပြုချက်များကိုစစ်ဆေးပါ။',
    invalidClipboardData: 'မမှန်ကန်သောကလစ်ဘုတ်ဒေတာ။',
    invalidFileType: 'မမှန်ကန်သော ဖိုင်အမျိုးအစား',
    invalidFileTypeValue: 'မမှန်ကန်သော ဖိုင်အမျိုးအစား: {{value}}',
    invalidRequestArgs: 'တောင်းဆိုမှုတွင် မှားယွင်းသော အကြောင်းပြချက်များ ပေးပို့ထားသည်: {{args}}',
    loadingDocument: '{{id}} ID ဖြင့် ဖိုင်ကို ဖွင့်ရာတွင် ပြဿနာရှိနေသည်။',
    localesNotSaved_one: 'အောက်ပါ ဒေသသတ်မှတ်ချက်ကို သိမ်းဆည်း၍ မရပါ။',
    localesNotSaved_other: 'အောက်ပါ ဒေသသတ်မှတ်ချက်များကို သိမ်းဆည်း၍ မရပါ။',
    logoutFailed: 'ထွက်မှားနေသည်။',
    missingEmail: 'အီးမေးလ်ပျောက်ဆုံး',
    missingIDOfDocument: 'ပြင်ဆင်ရန် ဖိုင် ID ပျောက်နေပါသည်။',
    missingIDOfVersion: 'ပျောက်ဆုံး ဗားရှင်း ID',
    missingRequiredData: 'လိုအပ်သောဒေတာ ပျောက်ဆုံးနေပါသည်။',
    noFilesUploaded: 'ဖိုင်များကို အပ်လုဒ်လုပ်ထားခြင်းမရှိပါ။',
    noMatchedField: '"{{label}}" အတွက် ကိုက်ညီသောအပိုင်းကို ရှာမတွေ့ပါ။',
    notAllowedToAccessPage: 'ဤစာမျက်နှာကို ဝင်ရောက်ခွင့်မပြုပါ။',
    notAllowedToPerformAction: 'ဤလုပ်ဆောင်ချက်ကို လုပ်ဆောင်ရန် ခွင့်မပြုပါ။',
    notFound: 'တောင်းဆိုထားသော အရင်းအမြစ်ကို ရှာမတွေ့ပါ။',
    noUser: 'အသုံးပြုသူ မရှိပါ။',
    previewing: 'ဖိုင်ကို အစမ်းကြည့်ရန် ပြဿနာရှိနေသည်။',
    problemUploadingFile: 'ဖိုင်ကို အပ်လုဒ်တင်ရာတွင် ပြဿနာရှိနေသည်။',
    restoringTitle:
      'Terdapat ralat semasa memulihkan {{title}}. Sila semak sambungan anda dan cuba lagi.',
    tokenInvalidOrExpired: 'တိုကင်သည် မမှန်ကန်ပါ သို့မဟုတ် သက်တမ်းကုန်သွားပါပြီ။',
    tokenNotProvided: 'Token မပေးထားပါ။',
    unableToCopy: 'ကူးရန်မဖြစ်နိုင်ပါ။',
    unableToDeleteCount: '{{total}} {{label}} မှ {{count}} ကို ဖျက်၍မရပါ။',
    unableToReindexCollection:
      '{{collection}} စုစည်းမှုကို ပြန်လည်အညွှန်းပြုလုပ်ခြင်း အမှားရှိနေသည်။ လုပ်ဆောင်မှုကို ဖျက်သိမ်းခဲ့သည်။',
    unableToUpdateCount: '{{total}} {{label}} မှ {{count}} ကို အပ်ဒိတ်လုပ်၍မရပါ။',
    unauthorized: 'အခွင့်မရှိပါ။ ဤတောင်းဆိုချက်ကို လုပ်ဆောင်နိုင်ရန် သင်သည် လော့ဂ်အင်ဝင်ရပါမည်။',
    unauthorizedAdmin: 'အခွင့်မရှိပါ။ ဤအကောင့်အသုံးပြုသူသည် အဆင့်မပြုပါနိုင်ပါ။',
    unknown: 'ဘာမှန်းမသိသော error တက်သွားပါသည်။',
    unPublishingDocument: 'ဖိုင်ကို ပြန်လည့် သိမ်းဆည်းခြင်းမှာ ပြဿနာရှိနေသည်။',
    unspecific: 'Error တက်နေပါသည်။',
    unverifiedEmail: 'ထည့်သွင်းမည်မဆိုမီ သင့်အီးမေးလ်ကို အတည်ပြုပါ။',
    userEmailAlreadyRegistered: 'ပေးထားသော အီးမေးလ်ဖြင့် အသုံးပြုသူ တစ်ဦး ရှိပြီးဖြစ်သည်။',
    userLocked:
      'အကောင့်ထဲကို ဝင်ရန် အရမ်းအရမ်းကို ကြိုးပမ်းနေသောကြောင့် အကောင့်အား လော့ခ်ချလိုက်ပါသည်။',
    usernameAlreadyRegistered: 'Pengguna dengan nama pengguna yang diberikan sudah mendaftar.',
    usernameOrPasswordIncorrect: 'Nama pengguna atau kata laluan yang diberikan tidak betul.',
    valueMustBeUnique: 'value သည် အဓိပ္ပာယ်ရှိရပါမည်။',
    verificationTokenInvalid: 'အတည်ပြုခြင်းတိုကင်သည် မမှန်ကန်ပါ။',
  },
  fields: {
    addLabel: '{{label}} ထည့်သွင်းမည်။',
    addLink: 'လင့်ခ်ထည့်ပါ။',
    addNew: 'အသစ် ထည့်သွင်းမည်။',
    addNewLabel: '{{label}} အားအသစ် ထည့်သွင်းမည်။',
    addRelationship: 'Relationship အသစ်ထည့်သွင်းမည်။',
    addUpload: 'Upload ထည့်ပါ။',
    block: 'ဘလောက်',
    blocks: 'ဘလောက်များ',
    blockType: 'ဘလောက် အမျိုးအစား',
    chooseBetweenCustomTextOrDocument:
      'စိတ်ကြိုက်စာသား URL ကိုထည့်ခြင်း သို့မဟုတ် အခြားစာရွက်စာတမ်းတစ်ခုသို့ လင့်ခ်ချိတ်ခြင်းအကြား ရွေးချယ်ပါ။',
    chooseDocumentToLink: 'ချိတ်ဆက်ရန် စာရွက်စာတမ်းကို ရွေးပါ။',
    chooseFromExisting: 'ရှိပြီးသားထဲကပဲ ရွေးချယ်ပါ။',
    chooseLabel: '{{label}} အားရွေးချယ်ပါ။',
    collapseAll: 'အားလုံးကို ခေါက်သိမ်းပါ။',
    customURL: 'စိတ်ကြိုက် URL',
    editLabelData: 'ဒေတာ {{label}} ကို တည်းဖြတ်ပါ။',
    editLink: 'လင့်ခ်ကို တည်းဖြတ်ပါ။',
    editRelationship: 'ဆက်ဆံရေးကို တည်းဖြတ်ပါ။',
    enterURL: 'URL တစ်ခုထည့်ပါ။',
    internalLink: 'Internal Link',
    itemsAndMore: '{{items}} နှင့် နောက်ထပ် {{count}} ခု',
    labelRelationship: '{{label}} Relationship',
    latitude: 'vĩ độ',
    linkedTo: '<0>{{label}}</0> ချိတ်ဆက်ထားသည်။',
    linkType: 'လင့်အမျိုးအစား',
    longitude: 'လောင်ဂျီကျု',
    newLabel: '{{label}} အသစ်',
    openInNewTab: 'တက်ဘ်အသစ်တွင် ဖွင့်ပါ။',
    passwordsDoNotMatch: 'စကားဝှက်များနှင့် မကိုက်ညီပါ။',
    relatedDocument: 'ဆက်စပ် ဖိုင်',
    relationTo: 'ဆက်စပ်မှု',
    removeRelationship: 'ဆက်ဆံရေးကို ဖယ်ရှားပါ။',
    removeUpload: 'အပ်လုဒ်ကို ဖယ်ရှားပါ။',
    saveChanges: 'သိမ်းဆည်းမည်။',
    searchForBlock: 'ဘလောက်တစ်ခုရှာမည်။',
    selectExistingLabel: 'ရှိပြီးသား {{label}} ကို ရွေးပါ',
    selectFieldsToEdit: 'တည်းဖြတ်ရန် အကွက်များကို ရွေးပါ။',
    showAll: 'အကုန် ကြည့်မည်။',
    swapRelationship: 'လဲလှယ်ဆက်ဆံရေး',
    swapUpload: 'အပ်လုဒ်ဖလှယ်ပါ။',
    textToDisplay: 'ပြသရန် စာသား',
    toggleBlock: 'ဘလောက်ကို ပြောင်းပါ။',
    uploadNewLabel: '{{label}} အသစ်တင်မည်။',
  },
  folder: {
    browseByFolder: 'Layari mengikut Folder',
    byFolder: 'Dengan Folder',
    deleteFolder: 'Padam Folder',
    folderName: 'ဖိုင်နာမည်',
    folders: 'Fail',
    folderTypeDescription: 'Pilih jenis dokumen koleksi yang harus diizinkan dalam folder ini.',
    itemHasBeenMoved: '{{title}} telah dipindahkan ke {{folderName}}',
    itemHasBeenMovedToRoot: '"{{title}}" က ဗဟိုဖိုလ်ဒါသို့ရွှေ့ပြီးပါပြီ။',
    itemsMovedToFolder: '{{title}} သို့ {{folderName}} သို့ ရွှေ့လိုက်သွားပါပယ်',
    itemsMovedToRoot: '{{title}} telah dipindahkan ke folder akar',
    moveFolder: 'Pindah Folder',
    moveItemsToFolderConfirmation:
      'သင့်တွင် <1>{{count}} {{label}}</1> <2>{{toFolder}}</2>သို့ ရွှေ့နေသည့်အခါဖြစ်ပါသည်။ သေချာပါသလား?',
    moveItemsToRootConfirmation:
      'Anda akan memindahkan <1>{{count}} {{label}}</1> ke folder akar. Adakah anda pasti?',
    moveItemToFolderConfirmation:
      'Anda akan memindahkan <1>{{title}}</1> ke <2>{{toFolder}}</2>. Adakah anda pasti?',
    moveItemToRootConfirmation:
      'Anda akan memindahkan <1>{{title}}</1> ke folder root. Adakah anda pasti?',
    movingFromFolder: 'Memindahkan {{title}} dari {{fromFolder}}',
    newFolder: 'Folder Baru',
    noFolder: 'ဖိုလ်ဒါမရှိပါ',
    renameFolder: 'ဖိုလ်ဒါအမည်ပြောင်းရန်',
    searchByNameInFolder: 'နာမည်ဖြင့် {{folderName}} တွင် ရှာဖွေပါ',
    selectFolderForItem: 'Pilih folder untuk {{title}}',
  },
  general: {
    name: 'နာမည်',
    aboutToDelete:
      '{{label}} <1>{{title}}</1> ကို ဖျက်ပါတော့မည်။ သေချာပြီလား။ ဖျက်ပြီးရင် ပြန်မရဘူးနော်။',
    aboutToDeleteCount_many: 'သင်သည် {{count}} {{label}} ကို ဖျက်ပါတော့မည်။',
    aboutToDeleteCount_one: 'သင်သည် {{count}} {{label}} ကို ဖျက်ပါတော့မည်။',
    aboutToDeleteCount_other: 'သင်သည် {{count}} {{label}} ကို ဖျက်ပါတော့မည်။',
    aboutToPermanentlyDelete:
      'Anda akan menghapuskan secara kekal {{label}} <1>{{title}}</1>. Adakah anda pasti?',
    aboutToPermanentlyDeleteTrash:
      'Anda akan menghapus secara kekal <0>{{count}}</0> <1>{{label}}</1> dari tong sampah. Adakah anda pasti?',
    aboutToRestore: 'Anda akan memulihkan {{label}} <1>{{title}}</1>. Adakah anda pasti?',
    aboutToRestoreAsDraft:
      'Anda akan memulihkan {{label}} <1>{{title}}</1> sebagai draf. Adakah anda pasti?',
    aboutToRestoreAsDraftCount: 'Anda akan memulihkan {{count}} {{label}} sebagai draf',
    aboutToRestoreCount: 'Anda akan memulihkan {{count}} {{label}}',
    aboutToTrash:
      'Anda akan memindahkan {{label}} <1>{{title}}</1> ke tong sampah. Adakah anda pasti?',
    aboutToTrashCount: 'Anda akan memindah {{count}} {{label}} ke tong sampah',
    addBelow: 'အောက်တွင်ထည့်ပါ။',
    addFilter: 'ဇကာထည့်ပါ။',
    adminTheme: 'အက်ပ်ဒိုင်များစပ်စွာ',
    all: 'Semua',
    allCollections: 'အားလုံးစုစည်းမှုများ',
    allLocales: 'Semua tempat',
    and: 'နှင့်',
    anotherUser: 'တစ်ခြားအသုံးပြုသူ',
    anotherUserTakenOver: 'တစ်ခြားအသုံးပြုသူသည်ဤစာရွက်စာတမ်းကိုပြင်ဆင်မှုကိုရယူလိုက်သည်။',
    applyChanges: 'ပြောင်းလဲမှုများ အသုံးပြုပါ',
    ascending: 'တက်နေသည်',
    automatic: 'အော်တို',
    backToDashboard: 'ပင်မစာမျက်နှာသို့ ပြန်သွားမည်။',
    cancel: 'မလုပ်တော့ပါ။',
    changesNotSaved:
      'သင်၏ပြောင်းလဲမှုများကို မသိမ်းဆည်းရသေးပါ။ ယခု စာမျက်နှာက ထွက်လိုက်ပါက သင်၏ပြောင်းလဲမှုများ အကုန် ဆုံးရှုံးသွားပါမည်။ အကုန်နော်။',
    clear: 'Jelas',
    clearAll: 'အားလုံးကိုရှင်းလင်းပါ',
    close: 'ပိတ်',
    collapse: 'ခေါက်သိမ်းပါ။',
    collections: 'စုစည်းမှူများ',
    columns: 'ကော်လံများ',
    columnToSort: 'ကော်လံ စီရန်',
    confirm: 'သေချာပါပြီ။',
    confirmCopy: 'အောင်မြင်စေသည့်ကူးထားပြီးအတည်ပြုပါ',
    confirmDeletion: 'ဖျက်တော့မယ်နော်။',
    confirmDuplication: 'ပုံတူပွားခြင်းကို အတည်ပြုပါ။',
    confirmMove: 'Sahkan pergerakan',
    confirmReindex: 'အပေါ် {{collections}} အားလုံးကို ထပ်လိပ်ပါသလား?',
    confirmReindexAll: 'အပေါ် ကော်လက်ရှင်းများအားလုံးကို ထပ်လိပ်ပါသလား?',
    confirmReindexDescription:
      'ဤသည်သည် ရှိပြီးသား အညွှန်းများကို ဖျက်ပစ်ပြီး {{collections}} ကော်လက်ရှင်းများတွင် စာရွက်များကို ထပ်လိပ်ပါလိမ့်မည်။',
    confirmReindexDescriptionAll:
      'ဤသည်သည် ရှိပြီးသား အညွှန်းများကို ဖျက်ပစ်ပြီး အားလုံးသော ကော်လက်ရှင်းများတွင် စာရွက်များကို ထပ်လိပ်ပါလိမ့်မည်။',
    confirmRestoration: 'Sahkan pemulihan',
    copied: 'ကူးယူပြီးပြီ။',
    copy: 'ကူးယူမည်။',
    copyField: 'ကွက်လပ်ကိုကူးပါ',
    copying: 'ကူးယူခြင်း',
    copyRow: 'တန်းကိုကူးပါ',
    copyWarning:
      'Anda akan menulis ganti {{to}} dengan {{from}} untuk {{label}} {{title}}. Adakah anda pasti?',
    create: 'ဖန်တီးမည်။',
    created: 'ဖန်တီးခဲ့သည်။',
    createdAt: 'ဖန်တီးခဲ့သည့်အချိန်',
    createNew: 'အသစ် ဖန်တီးမည်။',
    createNewLabel: '{{label}} အသစ် ဖန်တီးမည်။',
    creating: 'ဖန်တီးနေသည်။',
    creatingNewLabel: '{{label}} အသစ် ဖန်တီးနေသည်။',
    currentlyEditing:
      'ဒီစာရွက်စာတမ်းကိုလက်ရှိပြင်ဆင်နေသည်။ သင်ဤတာဝန်ကိုယူပါက၊ သူတို့သည်ဆက်လက်ပြင်ဆင်ခွင့်မရအောင်ပိတ်ထားမည်ဖြစ်ပြီး၊ မသိမ်းဆည်းရသေးသောပြင်ဆင်မှုများကိုလည်းဆုံးရှုံးနိုင်သည်။',
    custom: 'ထုတ်ကုန် စိတ်ကြိုက်',
    dark: 'အမှောင်',
    dashboard: 'ပင်မစာမျက်နှာ',
    delete: 'ဖျက်မည်။',
    deleted: 'ဖျက်ထား',
    deletedAt: 'Dihapus Pada',
    deletedCountSuccessfully: '{{count}} {{label}} ကို အောင်မြင်စွာ ဖျက်လိုက်ပါပြီ။',
    deletedSuccessfully: 'အောင်မြင်စွာ ဖျက်လိုက်ပါပြီ။',
    deletePermanently: 'Langkau sampah dan padam secara kekal',
    deleting: 'ဖျက်နေဆဲ ...',
    depth: 'ထိုင်းအောက်မှု',
    descending: 'ဆင်းသက်လာသည်။',
    deselectAllRows: 'အားလုံးကို မရွေးနိုင်ပါ',
    document: 'စာရွက်စာတမ်း',
    documentIsTrashed: 'Ini {{label}} telah dibuang dan hanya boleh dibaca sahaja.',
    documentLocked: 'စာရွက်စာတမ်းကိုပိတ်ထားသည်',
    documents: 'စာရွက်စာတမ်းများ',
    duplicate: 'ပုံတူပွားမည်။',
    duplicateWithoutSaving: 'သေချာပါပြီ။',
    edit: 'တည်းဖြတ်ပါ။',
    editAll: 'အားလုံးကို တည်းဖြတ်ပါ။',
    editedSince: 'ကစပြီးတည်းဖြတ်ခဲ့သည်',
    editing: 'ပြင်ဆင်နေသည်။',
    editingLabel_many: 'တည်းဖြတ်ခြင်း {{count}} {{label}}',
    editingLabel_one: 'တည်းဖြတ်ခြင်း {{count}} {{label}}',
    editingLabel_other: 'တည်းဖြတ်ခြင်း {{count}} {{label}}',
    editingTakenOver: 'တည်းဖြတ်ခြင်းကိုရယူခဲ့သည်',
    editLabel: '{{label}} ပြင်ဆင်မည်။',
    email: 'အီးမေးလ်',
    emailAddress: 'အီးမေးလ် လိပ်စာ',
    emptyTrash: 'Kosongkan tong sampah',
    emptyTrashLabel: 'Kosongkan {{label}} sampah',
    enterAValue: 'တန်ဖိုးတစ်ခုထည့်ပါ။',
    error: 'အမှား',
    errors: 'အမှားများ',
    exitLivePreview: 'Keluar dari Pratinjau Langsung',
    export: 'တင်ပို့',
    fallbackToDefaultLocale: 'မူရင်းဒေသသို့ ပြန်ပြောင်းပါ။',
    false: 'မှား',
    filter: 'ဇကာ',
    filters: 'စစ်ထုတ်မှုများ',
    filterWhere: 'နေရာတွင် စစ်ထုတ်ပါ။',
    globals: 'Globals',
    goBack: 'နောက်သို့',
    groupByLabel: 'Berkumpulkan mengikut {{label}}',
    import: 'သွင်းကုန်',
    isEditing: 'ပြင်ဆင်နေသည်',
    item: 'barang',
    items: 'barang-barang',
    language: 'ဘာသာစကား',
    lastModified: 'နောက်ဆုံးပြင်ဆင်ထားသည်။',
    leaveAnyway: 'ဘာဖြစ်ဖြစ် ထွက်မည်။',
    leaveWithoutSaving: 'မသိမ်းဘဲ ထွက်မည်။',
    light: 'အလင်း',
    livePreview: 'အစမ်းကြည့်ရန်',
    loading: 'ဖွင့်နေသည်',
    locale: 'ဒေသ',
    locales: 'Locales',
    menu: 'မီနူး',
    moreOptions: 'ပိုမိုများစွာရွေးချယ်ခွင့်',
    move: 'ရွှေ့ပြောင်းပါ',
    moveConfirm:
      'သင် <1>{{destination}}</1> သို့ {{count}} {{label}} ကို ရွှေ့မည်ဖြစ်သည်။ သင့်တောင်းဆိုမှုကို သေချာပါသလား?',
    moveCount: 'Pindah {{count}} {{label}}',
    moveDown: 'Move Down',
    moveUp: 'Move Up',
    moving: 'ရွှေ့ပြောင်းခြင်း',
    movingCount: 'Memindahkan {{count}} {{label}}',
    newPassword: 'စကားဝှက် အသစ်',
    next: 'Seterusnya',
    no: 'Tidak',
    noDateSelected: 'ရက်စွဲမရွေးချယ်ထားပါ',
    noFiltersSet: 'စစ်ထုတ်မှုများ မသတ်မှတ်ထားပါ။',
    noLabel: '<မရှိ {{label}}>',
    none: 'တစ်ခုမှ',
    noOptions: 'ရွေးချယ်မှုမရှိပါ',
    noResults:
      '{{label}} မတွေ့ပါ။ {{label}} မရှိသေးသည်ဖြစ်စေ အထက်တွင်ဖော်ပြထားသော စစ်ထုတ်မှုများနှင့် ကိုက်ညီမှုမရှိပါ။',
    notFound: 'ဘာမှ မရှိတော့ဘူး။',
    nothingFound: 'ဘာမှလည်း မတွေ့ဘူး။',
    noTrashResults: 'Tiada {{label}} dalam tong sampah.',
    noUpcomingEventsScheduled: 'Tiada acara yang akan datang dijadualkan.',
    noValue: 'တန်ဖိုး မရှိပါ။',
    of: '၏',
    only: 'Hanya',
    open: 'ဖွင့်မည်။',
    or: 'သို့မဟုတ်',
    order: 'အစဉ်လိုက်',
    overwriteExistingData: 'Menulis semula data bidang yang sedia ada',
    pageNotFound: 'ရောက်ရှိနေသော စာမျက်နှာသည် မရှိပါ။',
    password: 'စကားဝှက်',
    pasteField: 'ကွက်လပ်ကိုတင်ပါ',
    pasteRow: 'တန်းကိုတင်ပါ',
    payloadSettings: 'ရွေးချယ်စရာများ',
    permanentlyDelete: 'Padam Selamanya',
    permanentlyDeletedCountSuccessfully:
      '{{count}} {{label}} telah berjaya dipadamkan secara kekal.',
    perPage: 'စာမျက်နှာ အလိုက်: {{limit}}',
    previous: 'ယခင်',
    reindex: 'ပြန်လည်အညွှန်းပြုလုပ်ပါ',
    reindexingAll: 'အပေါ် {{collections}} အားလုံးကို ထပ်လိပ်နေပါသည်။',
    remove: 'ဖယ်ရှားမည်။',
    rename: 'အမည်ပြောင်း',
    reset: 'Tetapkan semula',
    resetPreferences: 'ကြိုတင်သတ်မှတ်ချက်များ ပြန်လည်တပ်ဆင်မည်',
    resetPreferencesDescription:
      'ဤသည်သည် သင့်၏အကြိုက်များအားလုံးကို အခြားတပ်ဆင်မှုများမှ ပြန်လည်သတ်မှတ်ပေးပါလိမ့်မည်။',
    resettingPreferences: 'ကြိုတင်သတ်မှတ်ချက်များ ပြန်လည်တပ်ဆင်နေပါသည်။',
    restore: 'Pulihkan',
    restoreAsPublished: 'Pulihkan sebagai versi yang diterbitkan',
    restoredCountSuccessfully: 'Berjaya memulihkan {{count}} {{label}}.',
    restoring:
      'Hormati makna teks asal dalam konteks Payload. Berikut adalah senarai istilah Payload yang membawa maksud tertentu :\n    - Koleksi : Koleksi ialah kumpulan dokumen yang berkongsi struktur dan tujuan yang sama. Koleksi digunakan untuk mengatur dan menguruskan kandungan dalam Payload.\n    - Medan: Medan adalah sebahagian daripada data dalam dokumen dalam suatu koleksi. Medan menentukan struktur dan jenis data yang boleh disimpan dalam dokumen.\n    - Dokumen: Dokumen adalah rekod individu dalam suatu koleksi. Ia mengandungi data yang telah',
    row: 'အတန်း',
    rows: 'Rows',
    save: 'သိမ်းဆည်းမည်။',
    saving: 'သိမ်းနေဆဲ ...',
    schedulePublishFor: 'Jadualkan penerbitan untuk {{title}}',
    searchBy: 'ရှာဖွေပါ။',
    select: 'Pilih',
    selectAll: '{{count}} {{label}} အားလုံးကို ရွေးပါ',
    selectAllRows: 'အားလုံးကိုရွေးချယ်ပါ',
    selectedCount: '{{count}} {{label}} ကို ရွေးထားသည်။',
    selectLabel: 'Pilih {{label}}',
    selectValue: 'တစ်ခုခုကို ရွေးချယ်ပါ။',
    showAllLabel: 'Tunjukkan semua {{label}}',
    sorryNotFound: 'ဝမ်းနည်းပါသည်။ သင်ရှာနေတဲ့ဟာ ဒီမှာမရှိပါ။',
    sort: 'အစဉ်လိုက်',
    sortByLabelDirection: 'အစဉ်အလိုက် စီမံခန့်ခွဲထားသည် {{label}} {{direction}}',
    stayOnThisPage: 'ဒီမှာပဲ ဆက်နေမည်။',
    submissionSuccessful: 'သိမ်းဆည်းမှု အောင်မြင်ပါသည်။',
    submit: 'သိမ်းဆည်းမည်။',
    submitting: 'Menghantar...',
    success: 'အောင်မြင်မှု',
    successfullyCreated: '{{label}} အောင်မြင်စွာဖန်တီးခဲ့သည်။',
    successfullyDuplicated: '{{label}} အောင်မြင်စွာ ပုံတူပွားခဲ့သည်။',
    successfullyReindexed:
      '{{collections}} စုစည်းမှုများမှ စာရွက်စာတမ်း {{total}} ခုအနက် {{count}} ခုကို အောင်မြင်စွာ ပြန်လည်အညွှန်းပြုလုပ်ခဲ့ပါသည်။',
    takeOver: 'တာဝန်ယူပါ',
    thisLanguage: 'မြန်မာစာ',
    time: 'Masa',
    timezone: 'Masa Wilayah',
    titleDeleted: '{{label}} {{title}} အောင်မြင်စွာ ဖျက်သိမ်းခဲ့သည်။',
    titleRestored: '"{{label}}" "{{title}}" အောင်မြင်စွာ ပြန်လည် ထည့်သွင်းပြီး ဖြစ်ပါတယ်။',
    titleTrashed: '"{{label}}" "{{title}}" dipindahkan ke tong sampah.',
    trash: 'ဖျက်သိမ်းခြင်း',
    trashedCountSuccessfully: '{{count}} {{label}} သို့ ဖယ်ရှားလိုက်သည်။',
    true: 'အမှန်',
    unauthorized: 'အခွင့်မရှိပါ။',
    unsavedChanges:
      'Anda mempunyai perubahan yang belum disimpan. Simpan atau buang sebelum meneruskan.',
    unsavedChangesDuplicate:
      'သင့်တွင် မသိမ်းဆည်းရသေးသော ပြောင်းလဲမှုများ ရှိနေပါသည်။ ပုံတူပွားမှာ သေချာပြီလား။',
    untitled: 'ခေါင်းစဥ်မဲ့',
    upcomingEvents: 'လာမည့် အစီအစဉ်များ',
    updatedAt: 'ပြင်ဆင်ခဲ့သည့်အချိန်',
    updatedCountSuccessfully: '{{count}} {{label}} ကို အောင်မြင်စွာ အပ်ဒိတ်လုပ်ခဲ့သည်။',
    updatedLabelSuccessfully: 'Berjaya mengemas kini {{label}}.',
    updatedSuccessfully: 'အပ်ဒိတ်လုပ်ပြီးပါပြီ။',
    updateForEveryone: 'အားလုံးအတွက် အပြောင်းအလဲ',
    updating: 'ပြင်ဆင်ရန်',
    uploading: 'တင်ပေးနေသည်',
    uploadingBulk: 'တင်နေသည် {{current}} ခု အမှတ်ဖြစ်သည် {{total}} ခုစုစုပေါင်းဖြင့်',
    user: 'အသုံးပြုသူ',
    username: 'Nama pengguna',
    users: 'အသုံးပြုသူများ',
    value: 'တန်ဖိုး',
    viewing: 'Melihat',
    viewReadOnly: 'ဖတ်ရှုရန်သာကြည့်ပါ',
    welcome: 'ကြိုဆိုပါတယ်။',
    yes: 'ဟုတ်ကဲ့',
  },
  localization: {
    cannotCopySameLocale: 'Tidak boleh menyalin ke lokasi yang sama',
    copyFrom: 'Salin dari',
    copyFromTo: 'Menyalin dari {{from}} ke {{to}}',
    copyTo: 'Salin ke',
    copyToLocale: 'Salin ke tempat setempat',
    localeToPublish: 'Untuk menerbitkan di lokasi',
    selectLocaleToCopy: 'Pilih tempatan untuk menyalin',
  },
  operators: {
    contains: 'ပါဝင်သည်',
    equals: 'ညီမျှ',
    exists: 'တည်ရှိသည်',
    intersects: 'ကြောက်ခြင်း',
    isGreaterThan: 'ထက်ကြီးသည်',
    isGreaterThanOrEqualTo: 'ထက်ကြီးသည် သို့မဟုတ် ညီမျှသည်',
    isIn: 'ရှိ',
    isLessThan: 'ထက်နည်းသည်',
    isLessThanOrEqualTo: 'ထက်နည်းသည် သို့မဟုတ် ညီမျှသည်',
    isLike: 'တူသည်',
    isNotEqualTo: 'ညီမျှသည်',
    isNotIn: 'မဝင်ပါ',
    isNotLike: 'မဟုတ်ကဲ့သို့',
    near: 'နီး',
    within: 'အတွင်း',
  },
  upload: {
    addFile: 'ဖိုင်ထည့်ပါ',
    addFiles: 'Tambah Fail',
    bulkUpload: 'Muat naik pukal',
    crop: 'သုန်း',
    cropToolDescription:
      'ရွေးထားသည့်ဧရိယာတွင်မွေးလျှက်မှုများကိုဆွဲပြီး, အသစ်တည်ပြီးသို့မဟုတ်အောက်ပါတ',
    download: 'ဒေါင်းလုဒ်ဆွဲပါ',
    dragAndDrop: 'ဖိုင်တစ်ဖိုင်ကို ဆွဲချလိုက်ပါ။',
    dragAndDropHere: 'သို့မဟုတ် ဖိုင်တစ်ခုကို ဤနေရာတွင် ဆွဲချပါ။',
    editImage: 'ပုံပြင်ပြောင်းရန်',
    fileName: 'ဖိုင် နာမည်',
    fileSize: 'ဖိုင် အရွယ်အစား',
    filesToUpload: 'Fail untuk Dimuat Naik',
    fileToUpload: 'ဖိုင်တင်ရန်',
    focalPoint: 'အကန့်အသတ်ချုပ်',
    focalPointDescription:
      'ပြသနားရထားသည့်ပုံအားထိန်းသိမ်းရန် ဖိုကယ်ပိုင်းကို တိုက်ရိုက်ပွဲ့နိုင်သည် သို',
    height: 'Height',
    lessInfo: 'အချက်အလက်နည်းတယ်။',
    moreInfo: 'အချက်အလက်',
    noFile: 'Tiada fail',
    pasteURL: 'URL ကို ကူးထည့်ပါ',
    previewSizes: 'Saiz Pratonton',
    selectCollectionToBrowse: 'စုစည်းမှု တစ်ခုခုကို ရွေးချယ်ပါ။',
    selectFile: 'ဖိုင်ရွေးပါ။',
    setCropArea: 'စပြန်းနယ်မြေထားပါ',
    setFocalPoint: 'အစေခံဖောက်ရေစနစ်ကိုသတ်မှတ်ပါ',
    sizes: 'အရွယ်အစားများ',
    sizesFor: '{{label}} အတွက် အရွယ်အစားများ',
    width: 'အကျယ်',
  },
  validation: {
    emailAddress: 'မှန်ကန်သော အီးမေးလ်လိပ်စာကို ထည့်သွင်းပါ။',
    enterNumber: 'မှန်ကန်သောနံပါတ်တစ်ခုထည့်ပါ။',
    fieldHasNo: 'ဤအကွက်တွင် {{label}} မရှိပါ။',
    greaterThanMax:
      '{{value}} သည် {{max}} ထက် ပိုမိုကြီးသည်။ ဤသည်ဖြင့် {{label}} အများဆုံးခွင့်ပြုထားသော တန်ဖိုးထက် ကြီးသည်။',
    invalidInput: 'ဤအကွက်တွင် မမှန်ကန်သော ထည့်သွင်းမှုတစ်ခုရှိသည်။',
    invalidSelection: 'ဤအကွက်တွင် မမှန်ကန်သော ရွေးချယ်မှုတစ်ခုရှိသည်။',
    invalidSelections: 'ဤအကွက်တွင် အောက်ပါ မမှန်ကန်သော ရွေးချယ်မှုများ ရှိသည်',
    lessThanMin:
      '{{value}} သည် {{min}} ထက် ပိုမိုနိမ့်သည်။ ဤသည်ဖြင့် {{label}} အနည်းဆုံးခွင့်ပြုထားသော တန်ဖိုးထက် နိမ့်သည်။',
    limitReached:
      'Had yang dibenarkan telah dicapai, hanya {{max}} item sahaja yang boleh ditambah.',
    longerThanMin: 'ဤတန်ဖိုးသည် အနိမ့်ဆုံးအရှည် {{minLength}} စာလုံးထက် ပိုရှည်ရမည်။',
    notValidDate: '"{{value}}" သည် တရားဝင်ရက်စွဲမဟုတ်ပါ။',
    required: 'ဤအကွက်ကို လိုအပ်သည်။',
    requiresAtLeast: 'ဤအကွက်သည် အနည်းဆုံး {{count}} {{label}} လိုအပ်သည်',
    requiresNoMoreThan: 'ဤအကွက်တွင် {{count}} {{label}} ထက် မပိုရပါ။',
    requiresTwoNumbers: 'ဤအကွက်သည် နံပါတ်နှစ်ခု လိုအပ်ပါသည်။',
    shorterThanMax: 'ဤတန်ဖိုးသည် စာလုံး {{maxLength}} လုံး၏ အမြင့်ဆုံးအရှည်ထက် ပိုတိုရပါမည်။',
    timezoneRequired: 'အချိန်ဇုန်တစ်ခုလိုအပ်သည်။',
    trueOrFalse: 'ဤအကွက်သည် တစ်ခုခုဖြစ်ရပါမည်။',
    username:
      'Sila masukkan nama pengguna yang sah. Boleh mengandungi huruf, nombor, tanda hubung, titik dan garis bawah.',
    validUploadID: "'ဤအကွက်သည် မှန်ကန်သော အပ်လုဒ် ID မဟုတ်ပါ။'",
  },
  version: {
    type: 'အမျိုးအစား',
    aboutToPublishSelection:
      'သင်သည် ရွေးချယ်မှုတွင် {{label}} အားလုံးကို ထုတ်ဝေပါတော့မည်။ သေချာလား?',
    aboutToRestore:
      'သင်သည် ဤ {{label}} စာရွက်စာတမ်းကို {{versionDate}} တွင် ပါရှိသည့် အခြေအနေသို့ ပြန်ယူတော့မည်။',
    aboutToRestoreGlobal:
      'သင်သည် ဂလိုဘယ် {{label}} ကို {{versionDate}} တွင် ပါရှိသည့် အခြေအနေသို့ ပြန်လည်ရောက်ရှိတော့မည်ဖြစ်သည်။',
    aboutToRevertToPublished:
      'သင်သည် အပြောင်းအလဲများကို အများဆိုင် အခြေအနေသို့ ပြန်ပြောင်းပါတော့မည်။ သေချာလား?',
    aboutToUnpublish: 'အများဆိုင်မှ ပြန်ဖြုတ်တော့မည်။ သေချာလား',
    aboutToUnpublishSelection:
      'သင်သည် ရွေးချယ်မှုတွင် {{label}} အားလုံးကို ထုတ်ဝေတော့မည် ဖြစ်သည်။ သေချာလား?',
    autosave: 'အလိုအလျောက်သိမ်းဆည်းပါ။',
    autosavedSuccessfully: 'အလိုအလျောက် သိမ်းဆည်းပြီးပါပြီ။',
    autosavedVersion: 'အော်တို ဗားရှင်း',
    changed: 'ပြောင်းခဲ့သည်။',
    changedFieldsCount_one: '{{count}} field telah diubah',
    changedFieldsCount_other: '{{count}}ကယ်လက်ရှိအရာများပြောင်းလဲလိုက်သည်',
    compareVersion: 'ဗားရှင်းနှင့် နှိုင်းယှဉ်ချက်:',
    compareVersions: 'Bandingkan Versi',
    comparingAgainst: 'Bandingkan dengan',
    confirmPublish: 'ထုတ်ဝေအတည်ပြုပါ။',
    confirmRevertToSaved: 'သိမ်းဆည်းပြီးကြောင်း အတည်ပြုပါ။',
    confirmUnpublish: 'အများဆိုင်ကို ဖျက်ရန် အတည်ပြုပါ။',
    confirmVersionRestoration: 'ဗားရှင်းပြန်လည် အသုံးပြုခြင်းကို အတည်ပြုပါ။',
    currentDocumentStatus: 'လက်ရှိ {{docStatus}} ဖိုင်',
    currentDraft: 'Draf Semasa',
    currentlyPublished: 'လက်ရှိထုတ်ဝေရေးသားနေ',
    currentlyViewing: 'Sedang melihat sekarang',
    currentPublishedVersion: 'လက်ရှိထုတ်ဝေထားသောဗားရှင်း',
    draft: 'မူကြမ်း',
    draftSavedSuccessfully: 'မူကြမ်းကို အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ။',
    lastSavedAgo: 'နောက်ဆုံး သိမ်းချက် {{distance}} ကြာပြီး',
    modifiedOnly: 'Hanya diubah',
    moreVersions: 'ပိုမိုများသော ဗားရှင်းများ...',
    noFurtherVersionsFound: 'နောက်ထပ်ဗားရှင်းများ မတွေ့ပါ။',
    noRowsFound: '{{label}} အားမတွေ့ပါ။',
    noRowsSelected: 'Tiada {{label}} yang dipilih',
    preview: 'နမူနာပြရန်',
    previouslyDraft: 'Sebelum ini Draf',
    previouslyPublished: 'တိုင်းရင်းသားထုတ်ဝေခဲ့',
    previousVersion: 'Versi Sebelumnya',
    problemRestoringVersion: 'ဤဗားရှင်းကို ပြန်လည်ရယူရာတွင် ပြဿနာရှိနေသည်။',
    publish: 'ထုတ်ဝေသည်။',
    publishAllLocales: 'နိုင်ငံတကာစာလုံးအားလုံးကို ထုတ်ဝေပါ',
    publishChanges: 'အပြောင်းအလဲများကို တင်ခဲ့သည်။',
    published: 'တင်ပြီးပြီ။',
    publishIn: 'Terbitkan di {{locale}}',
    publishing: 'ထုတ်ဝေခြင်း',
    restoreAsDraft: 'Pulihkan sebagai draf',
    restoredSuccessfully: 'အောင်မြင်စွာ ပြန်လည်ရယူခဲ့သည်။',
    restoreThisVersion: 'ဤဗားရှင်းကိုကို ပြန်ယူမည်။',
    restoring: 'ပြန်ယူနေဆဲ...',
    reverting: 'ပြန်ပြောင်းနေဆဲ...',
    revertToPublished: 'အများဆိုင်သို့ ပြန်ပြောင်းပါ။',
    saveDraft: 'မှုကြမ်းကို သိမ်းဆည်းမည်။',
    scheduledSuccessfully: 'အောင်မြင်စွာ နေ့စွဲထားသည်။',
    schedulePublish: 'ပြဌာန်းထုတ်ဝေချိန်း',
    selectLocales: 'ပြသရန် ဒေသန္တရများကို ရွေးပါ။',
    selectVersionToCompare: 'နှိုင်းယှဉ်ရန် ဗားရှင်းကို ရွေးပါ။',
    showingVersionsFor: 'အတွက် ဗားရှင်းများကို ပြသနေသည်-',
    showLocales: 'ဒေသန္တရများကိုပြပါ။:',
    specificVersion: 'အထူးဗားရှင်း',
    status: 'အခြေအနေ',
    unpublish: 'ပြန်ဖြုတ်မည်။',
    unpublishing: 'ပြန်ဖြုတ်နေဆဲ ...',
    version: 'ဗားရှင်း',
    versionAgo: '{{distance}} ကြာပြီ',
    versionCount_many: '{{count}} ဗားရှင်းများကို တွေ့ပါသည်။',
    versionCount_none: 'ဗားရှင်းရှာဖွေ့ပါ။',
    versionCount_one: '{{count}} ဗားရှင်အား တွေ့ပါသည်။',
    versionCount_other: 'ဗားရှင်း {{count}} ခု တွေ့ရှိပါသည်။',
    versionCreatedOn: '{{version}} အား ဖန်တီးခဲ့သည်။',
    versionID: 'ဗားရှင်း ID',
    versions: 'ဗားရှင်းများ',
    viewingVersion: '{{entityLabel}} {{documentTitle}} အတွက် ဗားရှင်းကို ကြည့်ရှုနေသည်',
    viewingVersionGlobal: '`ဂလိုဘယ်ဆိုင်ရာ {entityLabel}} အတွက် ဗားရှင်းကို ကြည့်ရှုနေသည်',
    viewingVersions: '{{entityLabel}} {{documentTitle}} အတွက် ဗားရှင်းများကို ကြည့်ရှုခြင်း',
    viewingVersionsGlobal: '`ဂလိုဘယ်ဆိုင်ရာ {{entityLabel}} အတွက် ဗားရှင်းများကို ကြည့်ရှုနေသည်',
  },
}

export const my: Language = {
  dateFNSKey: 'en-US',
  translations: myTranslations,
}
