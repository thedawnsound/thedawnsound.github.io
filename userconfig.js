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
    format: 'a B d H:M',
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
        name: 'entertainment',
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
            name: '9anime',
            url: 'https://9animetv.to/',
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
        name: 'technology',
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
            name: 'github',
            url: 'https://github.com/thedawnsound?tab=repositories',
            icon: 'download',
            icon_color: '#FFA066'
          }
        ]
      }
      ]
    },
    {
      name: 'はたらく',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'sjc',
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
          name: 'walmart',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/'
            }
          ]
        }
      ]
    },
    {
      name: 'なんでも',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'images',
          links: [
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
              icon_color: '#717C7C'
            },
            {
              name: 'bulk image resizer',
              url: 'https://www.birme.net/',
              icon: 'photo-scan',
              icon_color: '#717C7C'
            },
            {
              name: 'coolors',
              url: 'https://coolors.co/585123-eec170-f2a65a-f58549-772f1a',
              icon: 'photo-scan',
              icon_color: '#717C7C'
            }
          ]
        },
        {
          name: 'music',
          links: [
            {
              name: 'r/a/dio',
              url: 'https://r-a-d.io/',
              icon: 'radio',
              icon_color: '#C34043'
            },
            {
              name: 'bpm calc',
              url: 'https://sengpielaudio.com/calculator-bpmtempotime.htm',
              icon: 'radio',
              icon_color: '#C34043'
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'citefast',
              url: 'https://www.citefast.com/?s=APA7',
              icon: 'mailbox',
              icon_color: '#C34043'
            },
            {
              name: 'tabler icons',
              url: 'https://tabler.io/icons',
              icon: 'mailbox',
              icon_color: '#C34043'
            },
            {
              name: 'nerd fonts',
              url: 'https://www.nerdfonts.com/font-downloads',
              icon: 'mailbox',
              icon_color: '#C34043'
            },
            {
              name: 'kanagawa colors',
              url: 'https://github.com/rebelot/kanagawa.nvim?tab=readme-ov-file#color-palette',
              icon: 'mailbox',
              icon_color: '#C34043'
            }
          ]
        }
      ]
    }]
});
