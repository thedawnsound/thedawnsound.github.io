const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Toronto, Canada',
    scale: 'C'
  },
  clock: {
    format: '%a %B %d',
    iconColor: '#DCD7BA'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: ['crypto-rate', 'search-bar'],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'いらっしゃい',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'g-suite',
        links: [
          {
            name: 'youtube',
            url: 'https://www.youtube.com/',
            icon: 'brand-youtube',
            icon_color: '#E82424'
          },
          {
            name: 'keep',
            url: 'https://keep.google.com/u/0/',
            icon: 'sticker-2',
            icon_color: '#DCA561'
          },
          {
            name: 'gmail',
            url: 'https://mail.google.com/mail/u/0/#inbox',
            icon: 'mail',
            icon_color: '#C34043'
          },
          {
            name: 'drive',
            url: 'https://drive.google.com/drive/u/0/home',
            icon: 'brand-google-drive',
            icon_color: '#76946A'
          },
          {
            name: 'translate',
            url: 'https://translate.google.ca/',
            icon: 'language-katakana',
            icon_color: '#7FB4CA'
          }
        ]
      },
      {
        name: 'Entertainment',
        links: [
          {
            name: 'tenhou',
            url: 'https://tenhou.net/0/',
            icon: 'rectangle-vertical',
            icon_color: '#C8C093'
          },
          {
            name: 'one pace',
            url: 'https://rentry.co/onepace',
            icon: 'ship',
            icon_color: '#6A9589'
          },
          {
            name: 'wjar',
            url: 'https://weedjar.ca/location-select/?dtche%5Blocation%5D=weedjar-yonge',
            icon: 'seeding',
            icon_color: '#76946A'
          }
        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: 'fitgirl',
            url: 'https://1337x.to/user/FitGirl/',
            icon: 'download',
            icon_color: '#FFA066'
          },
          {
            name: 'bitsearch',
            url: 'https://bitsearch.to/',
            icon: 'file-search',
            icon_color: '#957FB8'
          },
          {
            name: 'unsplash',
            url: 'https://unsplash.com/',
            icon: 'camera',
            icon_color: '#727169'
          },
          {
            name: 'are.na',
            url: 'https://www.are.na/reflexive-codes/vectorheart-adjgyd5wdyy',
            icon: 'photo-scan',
            icon_color: '#16161D'
          },
          {
            name: 'r/a/dio',
            url: 'https://r-a-d.io/',
            icon: 'radio',
            icon_color: '#C34043'
          }
        ]
      }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
