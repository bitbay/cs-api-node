////////////
// ROUTES //
////////////

exports.routes = {

  get: [
    { path: "/:apiVersion/members/:membername", action: "membersFetch" },   
    { path: "/:apiVersion/members", action: "membersList" },  

    { path: "/:apiVersion/sponsors/:id", action: "sponsorsFetch" },       
    { path: "/:apiVersion/sponsors", action: "sponsorsList" },

    { path: "/:apiVersion/categories", action: "categoriesList" },
    { path: "/:apiVersion/technologies", action: "technologiesList" },

    { path: "/:apiVersion/leaderboard", action: "leaderboardList" },

    { path: "/:apiVersion/communities/:id", action: "communitiesFetch" },
    { path: "/:apiVersion/communities", action: "communitiesList" },

    { path: "/:apiVersion/accounts/authenticate", action: "accountsAuthenticate" } , // i mad this a get so it's easier to use for now
    { path: "/:apiVersion/accounts/find_by_service", action: "accountsFindByService" },     
    { path: "/:apiVersion/accounts/:membername", action: "accountsFindByName" },

    { path: "/:apiVersion/judging", action: "judgingList" },

    { path: "/:apiVersion/tos/:id", action: "tosFetch" },
    { path: "/:apiVersion/tos", action: "tosList" }

  ],

  put: [
  
  ],

  post: [

    //{ path: "/:apiVersion/accounts/authenticate", action: "accountsAuthenticate" } 

  ]  

};
