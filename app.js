const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'

// GET REQUEST
const teams = fetch(`${url}/squads/2/teams/6/members/`)
.then(response => response.json())
.then(data => {
  console.log('fetch', data)

  data.forEach(person => {
    if(person.name === "Vincent") {
      const name = document.querySelector('.name');
      const sportName = document.querySelector('.sport-name');
      const musicStyle = document.querySelector('.music-style');
      const workplaceName = document.querySelector('.workplace-name');
      const img = document.querySelector('.avatar');

      let nameNode = document.createTextNode(person.name + ' ' + person.prefix + ' ' + person.surname);
      name.appendChild(nameNode);

      let sportNode = document.createTextNode(person.other.sport);
      sportName.appendChild(sportNode);

      let musicNode = document.createTextNode(person.other.muziek);
      musicStyle.appendChild(musicNode);

      let workplaceNode = document.createTextNode(person.other.werkplek);
      workplaceName.appendChild(workplaceNode);

      img.src = person.mugshot;
    }
  })
});

// PUT REQUEST
const putData = {
  id: 6,
  teamId: 6,
  avatar: null,
  createdAt: null,
  name:'Vincent',
  prefix:'van',
  surname:'Leeuwen',
  mugshot:'https://avatars.githubusercontent.com/u/17025026?s=460&u=f2ecd52d68198f59ca293895bb8ab6ff70f303bd&v=4',
  githubHandle:'https://github.com/Vincentvanleeuwen',
  other: {
    sport: 'Gloving',
    muziek: 'Drum & Bass / Dubstep',
    werkplek: 'Thuis'
  }
}


async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

// postData(`${url}/squads/2/teams/6/members/`, putData)
// .then(data => {
//   console.log('put', data);
// });
