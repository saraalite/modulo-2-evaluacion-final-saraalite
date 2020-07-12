/* 
const favorites = [{"score":17.60362,"show":{"id":139,"url":"httpsrc image undefined inside object://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.7},"weight":97,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1577601053,"_links":{"self":{"href":"http://api.tvmaze.com/shows/139"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1079686"}}}},{"score":12.92156,"show":{"id":6771,"url":"http://www.tvmaze.com/shows/6771/the-powerpuff-girls","name":"The Powerpuff Girls","type":"Animation","language":"English","genres":["Comedy","Action","Science-Fiction"],"status":"Running","runtime":15,"premiered":"2016-04-04","officialSite":"https://www.cartoonnetwork.com/video/powerpuff-girls/index.html","schedule":{"time":"17:30","days":["Sunday"]},"rating":{"average":5.9},"weight":92,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":307473,"imdb":"tt4718304"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"},"summary":"<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>","updated":1573685920,"_links":{"self":{"href":"http://api.tvmaze.com/shows/6771"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1662010"}}}},{"score":13.317359,"show":{"id":32087,"url":"http://www.tvmaze.com/shows/32087/chicken-girls","name":"Chicken Girls","type":"Scripted","language":"English","genres":["Drama","Children","Music"],"status":"Running","runtime":16,"premiered":"2017-09-05","officialSite":"https://www.youtube.com/playlist?list=PLVewHiZp3_LPhqzbcZFmS3iuDm9HymTsy","schedule":{"time":"18:00","days":["Tuesday"]},"rating":{"average":6.4},"weight":87,"network":null,"webChannel":{"id":274,"name":"Brat","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":null,"thetvdb":339854,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/250/627433.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/250/627433.jpg"},"summary":"<p>Rhyme and her friends — known by their 'ship name, \"The Chicken Girls\" — have been dancing together forever. But this year, everything's changing...</p>","updated":1590153513,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32087"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1866789"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1869997"}}}},{"score":12.625419,"show":{"id":1955,"url":"http://www.tvmaze.com/shows/1955/the-powerpuff-girls","name":"The Powerpuff Girls","type":"Animation","language":"English","genres":["Action","Children","Crime"],"status":"Ended","runtime":30,"premiered":"1998-11-18","officialSite":null,"schedule":{"time":"","days":["Friday"]},"rating":{"average":8.3},"weight":86,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":6102,"thetvdb":76200,"imdb":"tt0175058"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/11/27896.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/11/27896.jpg"},"summary":"<p><b>The Powerpuff Girls</b> is an award-winning animated action series about three super-powered little girls Bubbles, Blossom and Buttercup with one very big mission: saving the world before bedtime.</p>","updated":1592706624,"_links":{"self":{"href":"http://api.tvmaze.com/shows/1955"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/160254"}}}},{"score":12.7193775,"show":{"id":722,"url":"http://www.tvmaze.com/shows/722/the-golden-girls","name":"The Golden Girls","type":"Scripted","language":"English","genres":["Drama","Comedy"],"status":"Ended","runtime":30,"premiered":"1985-09-14","officialSite":null,"schedule":{"time":"21:00","days":["Saturday"]},"rating":{"average":8.5},"weight":82,"network":{"id":1,"name":"NBC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":5820,"thetvdb":71292,"imdb":"tt0088526"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg"},"summary":"<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>","updated":1593840003,"_links":{"self":{"href":"http://api.tvmaze.com/shows/722"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/64040"}}}}];

// 

console.log(favorites)

  function transformFavorites(favorites){
    const serieToSave = []
    for (let i = 0; i < favorites.length; i += 1){
      serieToSave.push({
        show: {
          name:favorites[i].show.name,
          img: favorites[i].show.image.original, 
        }
      })
    }
    return serieToSave;
    
  }


  function saveInfoInLocalStorage() {
    transformFavorites(favorites); 
    favorites=transformFavorites(favorites);  
    console.log(transformFavorites(favorites))

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  saveInfoInLocalStorage()
 */

const favorites = [{"score":17.60362,"show":{"id":139,"url":"httpsrc image undefined inside object://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],"status":"Ended","runtime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls","schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.7},"weight":97,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1577601053,"_links":{"self":{"href":"http://api.tvmaze.com/shows/139"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1079686"}}}},{"score":12.92156,"show":{"id":6771,"url":"http://www.tvmaze.com/shows/6771/the-powerpuff-girls","name":"The Powerpuff Girls","type":"Animation","language":"English","genres":["Comedy","Action","Science-Fiction"],"status":"Running","runtime":15,"premiered":"2016-04-04","officialSite":"https://www.cartoonnetwork.com/video/powerpuff-girls/index.html","schedule":{"time":"17:30","days":["Sunday"]},"rating":{"average":5.9},"weight":92,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":null,"thetvdb":307473,"imdb":"tt4718304"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"},"summary":"<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>","updated":1573685920,"_links":{"self":{"href":"http://api.tvmaze.com/shows/6771"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1662010"}}}},{"score":13.317359,"show":{"id":32087,"url":"http://www.tvmaze.com/shows/32087/chicken-girls","name":"Chicken Girls","type":"Scripted","language":"English","genres":["Drama","Children","Music"],"status":"Running","runtime":16,"premiered":"2017-09-05","officialSite":"https://www.youtube.com/playlist?list=PLVewHiZp3_LPhqzbcZFmS3iuDm9HymTsy","schedule":{"time":"18:00","days":["Tuesday"]},"rating":{"average":6.4},"weight":87,"network":null,"webChannel":{"id":274,"name":"Brat","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":null,"thetvdb":339854,"imdb":null},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/250/627433.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/250/627433.jpg"},"summary":"<p>Rhyme and her friends — known by their 'ship name, \"The Chicken Girls\" — have been dancing together forever. But this year, everything's changing...</p>","updated":1590153513,"_links":{"self":{"href":"http://api.tvmaze.com/shows/32087"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1866789"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1869997"}}}},{"score":12.625419,"show":{"id":1955,"url":"http://www.tvmaze.com/shows/1955/the-powerpuff-girls","name":"The Powerpuff Girls","type":"Animation","language":"English","genres":["Action","Children","Crime"],"status":"Ended","runtime":30,"premiered":"1998-11-18","officialSite":null,"schedule":{"time":"","days":["Friday"]},"rating":{"average":8.3},"weight":86,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":6102,"thetvdb":76200,"imdb":"tt0175058"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/11/27896.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/11/27896.jpg"},"summary":"<p><b>The Powerpuff Girls</b> is an award-winning animated action series about three super-powered little girls Bubbles, Blossom and Buttercup with one very big mission: saving the world before bedtime.</p>","updated":1592706624,"_links":{"self":{"href":"http://api.tvmaze.com/shows/1955"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/160254"}}}},{"score":12.7193775,"show":{"id":722,"url":"http://www.tvmaze.com/shows/722/the-golden-girls","name":"The Golden Girls","type":"Scripted","language":"English","genres":["Drama","Comedy"],"status":"Ended","runtime":30,"premiered":"1985-09-14","officialSite":null,"schedule":{"time":"21:00","days":["Saturday"]},"rating":{"average":8.5},"weight":82,"network":{"id":1,"name":"NBC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":5820,"thetvdb":71292,"imdb":"tt0088526"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg"},"summary":"<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>","updated":1593840003,"_links":{"self":{"href":"http://api.tvmaze.com/shows/722"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/64040"}}}}];

{dataElement.image.image.original}

console.log(favorites[0])
const show = {
    name:favorites[0].show.name, 
    image: {
        original = favorites[0].show.image.original,
    }
  }

  console.log(show)