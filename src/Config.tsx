// конфигурационная константа
// рекомендуется исключать из внешнего репозитория контроля версий 

const config = {
    appId: 'c9361339-0fd8-4aa3-984d-344468649728',
    redirectUri: 'http://localhost:3000',
    scopes: [
      'user.read',
      'mailboxsettings.read',
      'calendars.readwrite'
    ]
  };
  
  export default config;