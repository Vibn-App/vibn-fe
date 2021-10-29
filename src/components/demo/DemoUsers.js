const demoUsers = [
  {
    id: '111',
    displayName: 'Gary Busey',
    email: 'gary@busey.co',
    profileURL:
      'https://open.spotify.com/playlist/0mfhWrW3IKTUk6nHvO3Z7n?si=1c29160454b748a0',
    image:
      'https://images.mubicdn.net/images/cast_member/2321/cache-463-1602494874/image-w856.jpg',
    topArtists: [
      {
        id: '1z4g3DjTBBZKhvAroFlhOM',
        artistName: 'Red Velvet',
        artistImage:
          'https://i.scdn.co/image/ab6761610000517444a1749aabb0a184657d877d',
        artistUrl: 'https://open.spotify.com/artist/1z4g3DjTBBZKhvAroFlhOM',
        artistGenre: ['kpop', 'k-pop girl group'],
      },
      {
        id: '7Ln80lUS6He07XvHI8qqHH',
        artistName: 'Arctic Monkeys',
        artistImage:
          'https://i.scdn.co/image/ab6761610000517439f37a34b404169fdca52dc8',
        artistUrl: 'https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH',
        artistGenre: ['garage rock', 'permanent wave'],
      },
      {
        id: '0XATRDCYuuGhk0oE7C0o5G',
        artistName: 'MAMAMOO',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174e12972169702affd7a4c48ec',
        artistUrl: 'https://open.spotify.com/artist/0XATRDCYuuGhk0oE7C0o5G',
        artistGenre: ['kpop', 'k-pop girl group'],
      },
      {
        id: '2dIgFjalVxs4ThymZ67YCE',
        artistName: 'Stray Kids',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174e722d94809f16241e74c5b43',
        artistUrl: 'https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE',
        artistGenre: ['kpop', 'k-pop boy group'],
      },
      {
        id: '1KP6TWI40m7p3QBTU6u2xo',
        artistName: 'BØRNS',
        artistImage:
          'https://i.scdn.co/image/ab676161000051746308e79c621076395807b455',
        artistUrl: 'https://open.spotify.com/artist/1KP6TWI40m7p3QBTU6u2xo',
        artistGenre: ['modern alternative rock', 'modern rock', 'pop'],
      },
    ],
  },
  {
    id: '222',
    displayName: 'Sbeve II',
    email: 'sbeve@busey.co',
    profileURL:
      'https://open.spotify.com/playlist/10PtRgVMX2LKPpjSn6kMio?si=5ceab0e4767f461b',
    image:
      'https://upload.wikimedia.org/wikipedia/en/8/8b/ST3_Steve_Harrington_portrait.jpg',
    topArtists: [
      {
        id: '1rCIEwPp5OnXW0ornlSsRl',
        artistName: 'Metric',
        artistImage:
          'https://i.scdn.co/image/ab676161000051747e75a358dc0917389f60df88',
        artistUrl: 'https://open.spotify.com/artist/1rCIEwPp5OnXW0ornlSsRl',
        artistGenre: ['alternative dance', 'canadian indie', 'canadian rock'],
      },
      {
        id: '0pnd3MP2rxAzljR9AqXUJB',
        artistName: 'Little Big',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174f48c408cb082a59cb7e2c821',
        artistUrl: 'https://open.spotify.com/artist/0pnd3MP2rxAzljR9AqXUJB',
        artistGenre: ['hard bass', 'russian rave'],
      },
      {
        id: '0PFtn5NtBbbUNbU9EAmIWF',
        artistName: 'TOTO',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174a59a5bcab211f964fe9bfb06',
        artistUrl: 'https://open.spotify.com/artist/0PFtn5NtBbbUNbU9EAmIWF',
        artistGenre: ['album rock', 'classic rock'],
      },
      {
        id: '12Chz98pHFMPJEknJQMWvI',
        artistName: 'Muse',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174b506164c3174bb7123a41424',
        artistUrl: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
        artistGenre: ['alternative rock', 'modern rock'],
      },
      {
        id: '3Nrfpe0tUJi4K4DXYWgMUX',
        artistName: 'BTS',
        artistImage:
          'https://i.scdn.co/image/ab6761610000517482a5d58059f81867b871d8b6',
        artistUrl: 'https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX',
        artistGenre: ['kpop', 'k-pop boy group'],
      },
    ],
  },
  {
    id: '333',
    displayName: 'Steve Buscemi',
    email: 'steve@busey.co',
    profileURL:
      'https://open.spotify.com/show/1w6X7As4rauic2UQEBoJ3O?si=Bc68QGPzRbyngn5krBOSdg',
    image:
      'https://cdn2.newsok.biz/cache/r960-82984c26d6d75dbc514b6fe25a0ccc29.jpg',
    topArtists: [
      {
        id: '73sIBHcqh3Z3NyqHKZ7FOL',
        artistName: 'Childish Gambino',
        artistImage:
          'https://i.scdn.co/image/ab676161000051743ef779aa0d271adb2b6a3ded',
        artistUrl: 'https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL',
        artistGenre: ['atl hip hop', 'hip hop'],
      },
      {
        id: '4iJLPqClelZOBCBifm8Fzv',
        artistName: 'Pierce The Veil',
        artistImage:
          'https://i.scdn.co/image/ab6761610000e5eb58c744a03131b95b9e846ff5',
        artistUrl: 'https://open.spotify.com/artist/4iJLPqClelZOBCBifm8Fzv',
        artistGenre: ['post-hardcore', 'hardcore', 'screamo'],
      },
      {
        id: '4LLpKhyESsyAXpc4laK94U',
        artistName: 'Mac Miller',
        artistImage:
          'https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a',
        artistUrl: 'https://spotify.com/artist/4LLpKhyESsyAXpc4laK94U',
        artistGenre: ['hip hop', 'rap'],
      },
      {
        id: '7GN9PivdemQRKjDt4z5Zv8',
        artistName: 'The Internet',
        artistImage:
          'https://i.scdn.co/image/ab6761610000e5ebc32c5dcda378eb561f81b1f9',
        artistUrl: 'https://open.spotify.com/artist/7GN9PivdemQRKjDt4z5Zv8',
        artistGenre: ['hip hop', 'rap'],
      },
      {
        id: '2EMAnMvWE2eb56ToJVfCWs',
        artistName: 'Bryson Tiller',
        artistImage:
          'https://i.scdn.co/image/ab6761610000e5eb078fdd734b7f0aa782328428',
        artistUrl: 'https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs',
        artistGenre: ['hip hop', 'rap'],
      },
    ],
  },
  {
    id: '444',
    displayName: 'Renaldo',
    email: 'renaldo@busey.co',
    profileURL:
      'https://open.spotify.com/playlist/37i9dQZF1DX9tPFwDMOaN1?si=c7515e62de2c4b91',
    image:
      'https://www.memesmonkey.com/images/memesmonkey/95/9529743fd87cc4b475d6ba5a49a97ca6.jpeg',
    topArtists: [
      {
        id: '6ueGR6SWhUJfvEhqkvMsVs',
        artistName: 'Janelle Monáe',
        artistImage:
          'https://i.scdn.co/image/ab676161000051743ea2c03525939b482f8d3bfd',
        artistUrl: 'https://open.spotify.com/artist/6ueGR6SWhUJfvEhqkvMsVs',
        artistGenre: ['afrofuturism', 'alternative r&b'],
      },
      {
        id: '6zvul52xwTWzilBZl6BUbT',
        artistName: 'Pixies',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174c93891745e7444b6d3edd341',
        artistUrl: 'https://open.spotify.com/artist/6zvul52xwTWzilBZl6BUbT',
        artistGenre: ['alternative rock', 'boston rock'],
      },
      {
        id: '7jVv8c5Fj3E9VhNjxT4snq',
        artistName: 'Lil Nas X',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174ab6bd6e450cbc7629a9a2381',
        artistUrl: 'https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq',
        artistGenre: ['lgbtq+ hip hop', 'pop'],
      },
      {
        id: '73sIBHcqh3Z3NyqHKZ7FOL',
        artistName: 'Childish Gambino',
        artistImage:
          'https://i.scdn.co/image/ab676161000051743ef779aa0d271adb2b6a3ded',
        artistUrl: 'https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL',
        artistGenre: ['atl hip hop', 'hip hop'],
      },
      {
        id: '7bmYpVgQub656uNTu6qGNQ',
        artistName: 'Hwa Sa',
        artistImage:
          'https://i.scdn.co/image/ab6761610000517410a7ade2827db798b9347c93',
        artistUrl: 'https://open.spotify.com/artist/7bmYpVgQub656uNTu6qGNQ',
        artistGenre: ['kpop', 'korean mask singer'],
      },
    ],
  },
  {
    id: '555',
    displayName: 'Jeeves',
    email: 'jeeves@busey.co',
    profileURL:
      'https://open.spotify.com/album/2AG5Udh8TM6Ww8dRYR3eVy?si=jr-nNQrwSrOTfcCCN6QNPQ',
    image: 'https://lovecatsworld.com/wp-content/uploads/2021/07/image-8.png',
    topArtists: [
      {
        id: '7GN9PivdemQRKjDt4z5Zv8',
        artistName: 'The Internet',
        artistImage:
          'https://i.scdn.co/image/ab6761610000e5ebc32c5dcda378eb561f81b1f9',
        artistUrl: 'https://open.spotify.com/artist/7GN9PivdemQRKjDt4z5Zv8',
        artistGenre: ['hip hop', 'rap'],
      },
      {
        id: '2EMAnMvWE2eb56ToJVfCWs',
        artistName: 'Bryson Tiller',
        artistImage:
          'https://i.scdn.co/image/ab6761610000e5eb078fdd734b7f0aa782328428',
        artistUrl: 'https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs',
        artistGenre: ['hip hop', 'rap'],
      },
      {
        id: '73sIBHcqh3Z3NyqHKZ7FOL',
        artistName: 'Childish Gambino',
        artistImage:
          'https://i.scdn.co/image/ab676161000051743ef779aa0d271adb2b6a3ded',
        artistUrl: 'https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL',
        artistGenre: ['atl hip hop', 'hip hop'],
      },
      {
        id: '7jVv8c5Fj3E9VhNjxT4snq',
        artistName: 'Lil Nas X',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174ab6bd6e450cbc7629a9a2381',
        artistUrl: 'https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq',
        artistGenre: ['lgbtq+ hip hop', 'pop'],
      },
      {
        id: '1KP6TWI40m7p3QBTU6u2xo',
        artistName: 'BØRNS',
        artistImage:
          'https://i.scdn.co/image/ab676161000051746308e79c621076395807b455',
        artistUrl: 'https://open.spotify.com/artist/1KP6TWI40m7p3QBTU6u2xo',
        artistGenre: ['modern alternative rock', 'modern rock', 'pop'],
      },
    ],
  },
  {
    id: '666',
    displayName: 'Amanda',
    email: 'amanda@busey.co',
    profileURL:
      'https://open.spotify.com/playlist/6gOJOnsgo0IlXGvswYYFDq?si=0b67400f1f744045',
    image:
      'https://thumbs.dreamstime.com/b/old-smiling-gray-haired-woman-holding-dollar-cash-money-home-old-smiling-gray-haired-woman-100326665.jpg',
    topArtists: [
      {
        id: '6ueGR6SWhUJfvEhqkvMsVs',
        artistName: 'Janelle Monáe',
        artistImage:
          'https://i.scdn.co/image/ab676161000051743ea2c03525939b482f8d3bfd',
        artistUrl: 'https://open.spotify.com/artist/6ueGR6SWhUJfvEhqkvMsVs',
        artistGenre: ['afrofuturism', 'alternative r&b'],
      },
      {
        id: '0pnd3MP2rxAzljR9AqXUJB',
        artistName: 'Little Big',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174f48c408cb082a59cb7e2c821',
        artistUrl: 'https://open.spotify.com/artist/0pnd3MP2rxAzljR9AqXUJB',
        artistGenre: ['hard bass', 'russian rave'],
      },
      {
        id: '2dIgFjalVxs4ThymZ67YCE',
        artistName: 'Stray Kids',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174e722d94809f16241e74c5b43',
        artistUrl: 'https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE',
        artistGenre: ['kpop', 'k-pop boy group'],
      },
      {
        id: '7jVv8c5Fj3E9VhNjxT4snq',
        artistName: 'Lil Nas X',
        artistImage:
          'https://i.scdn.co/image/ab67616100005174ab6bd6e450cbc7629a9a2381',
        artistUrl: 'https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq',
        artistGenre: ['lgbtq+ hip hop', 'pop'],
      },
      {
        id: '73sIBHcqh3Z3NyqHKZ7FOL',
        artistName: 'Childish Gambino',
        artistImage:
          'https://i.scdn.co/image/ab676161000051743ef779aa0d271adb2b6a3ded',
        artistUrl: 'https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL',
        artistGenre: ['atl hip hop', 'hip hop'],
      },
    ],
  },
];

export default demoUsers;

// {
//   id: '777',
//   displayName: 'Mara123',
//   email: 'mara@busey.co',
//   profileURL:
//     'https://open.spotify.com/user/tdar2zzv9peqiahhdf1liqgoc?si=50a5a5c4aade4db7',
//   image:
//     'https://styles.redditmedia.com/t5_2thci/styles/communityIcon_f22vdzw73e071.png',
//   topArtists: [],
// },
// {
//   id: '888',
//   displayName: 'Jim',
//   email: 'jim@busey.co',
//   profileURL:
//     'https://open.spotify.com/playlist/37i9dQZF1DWY1j3jZdCWOQ?si=1a88d181eb6347dc',
//   image:
//     'https://www.cashcolorcannabis.com/wp-content/uploads/2018/07/MNAQ4uuc0h.jpg',
//   topArtists: [],
// },
// {
//   id: '999',
//   displayName: 'RashidaLovesCats',
//   email: 'rashida@busey.co',
//   profileURL:
//     'https://open.spotify.com/user/hcb8th13610kpqqt7lwtdwdhz?si=03e862430b06451a',
//   image:
//     'https://i.pinimg.com/originals/82/9b/88/829b88b807c40fc5a8a054833366f791.jpg',
//   topArtists: [],
// },
// {
//   id: '123',
//   displayName: 'Catrick_Swayze',
//   email: 'catrick@busey.co',
//   profileURL:
//     'https://open.spotify.com/user/31v5zmkbprzeux3ghbjragrpijrm?si=04837c69c52447bf',
//   image:
//     'https://lovecatsworld.com/wp-content/uploads/2021/07/image-8.png',
// },
// {
//   id: '444',
//   displayName: 'Renaldo',
//   email: 'renaldo@busey.co',
//   profileURL:
//     'https://open.spotify.com/playlist/37i9dQZF1DX9tPFwDMOaN1?si=c7515e62de2c4b91',
//   image:
//     'https://www.memesmonkey.com/images/memesmonkey/95/9529743fd87cc4b475d6ba5a49a97ca6.jpeg',
// },
// {
//   id: '555',
//   displayName: 'Jeeves',
//   email: 'jeeves@busey.co',
//   profileURL:
//     'https://open.spotify.com/album/2AG5Udh8TM6Ww8dRYR3eVy?si=jr-nNQrwSrOTfcCCN6QNPQ',
//   image:
//     'https://st2.depositphotos.com/1032561/7236/i/600/depositphotos_72367653-stock-photo-waiter-holding-an-empty-silver.jpg',
// },
// {
//   id: '666',
//   displayName: 'Amanda',
//   email: 'amanda@busey.co',
//   profileURL:
//     'https://open.spotify.com/playlist/6gOJOnsgo0IlXGvswYYFDq?si=0b67400f1f744045',
//   image:
//     'https://thumbs.dreamstime.com/b/old-smiling-gray-haired-woman-holding-dollar-cash-money-home-old-smiling-gray-haired-woman-100326665.jpg',
// },
// {
//   id: '777',
//   displayName: 'Mara123',
//   email: 'mara@busey.co',
//   profileURL:
//     'https://open.spotify.com/user/tdar2zzv9peqiahhdf1liqgoc?si=50a5a5c4aade4db7',
//   image:
//     'https://styles.redditmedia.com/t5_2thci/styles/communityIcon_f22vdzw73e071.png',
// },
// {
//   id: '888',
//   displayName: 'Jim',
//   email: 'jim@busey.co',
//   profileURL:
//     'https://open.spotify.com/playlist/37i9dQZF1DWY1j3jZdCWOQ?si=1a88d181eb6347dc',
//   image:
//     'https://www.cashcolorcannabis.com/wp-content/uploads/2018/07/MNAQ4uuc0h.jpg',
// },
// {
//   id: '999',
//   displayName: 'RashidaLovesCats',
//   email: 'rashida@busey.co',
//   profileURL:
//     'https://open.spotify.com/user/hcb8th13610kpqqt7lwtdwdhz?si=03e862430b06451a',
//   image:
//     'https://i.pinimg.com/originals/82/9b/88/829b88b807c40fc5a8a054833366f791.jpg',
// },
// {
//   id: '123',
//   displayName: 'Catrick_Swayze',
//   email: 'catrick@busey.co',
//   profileURL:
//     'https://open.spotify.com/user/31v5zmkbprzeux3ghbjragrpijrm?si=04837c69c52447bf',
//   image:
//     'https://lovecatsworld.com/wp-content/uploads/2021/07/image-8.png',
// },
