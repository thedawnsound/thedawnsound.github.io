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
    format: 'a B d @ c:i p',
    iconColor: '#C8C093'
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
            icon_color: '#DCD7BA'
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
            icon: 'device-tv',
            icon_color: '#957FB8'
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
            icon: 'brand-github',
            icon_color: '#C8C093'
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
              name: 'netsuite',
              url: 'https://574176.app.netsuite.com/app/center/card.nl?sc=-46&whence=',
              icon: 'clock-2',
              icon_color: '#223249'
            },
            {
              name: 'gmail',              
              url: 'https://mail.google.com/mail/u/1/#inbox',
              icon: 'mail',
              icon_color: '#C34043'
            },
            {
              name: 'xinet',              
              url: 'https://walmartportal.stjosephcontent.com/PORTAL/STARTUP.php',
              icon: 'x',
              icon_color: '#2D4F67'
            }
          ]
        },
        {
          name: 'walmart',
          links: [
            {
              name: 'priority sheet',
              url: 'https://docs.google.com/spreadsheets/d/1M9KvsIBkcE0f2C6McGY8-nMfCS90pG5kACsxFU86iMk/edit#gid=753811081',
              icon: 'user-exclamation',
              icon_color: '#98BB6C'
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
              icon: 'resize',
              icon_color: '#2D4F67'
            },
            {
              name: 'coolors',
              url: 'https://coolors.co/585123-eec170-f2a65a-f58549-772f1a',
              icon: 'palette',
              icon_color: '#DCD7BA'
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
              icon: 'metronome',
              icon_color: '#A3D4D5'
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'citefast',
              url: 'https://www.citefast.com/?s=APA7',
              icon: 'blockquote',
              icon_color: '#C34043'
            },
            {
              name: 'tabler icons',
              url: 'https://tabler.io/icons',
              icon: 'brand-tabler',
              icon_color: '#54546D'
            },
            {
              name: 'nerd fonts',
              url: 'https://www.nerdfonts.com/font-downloads',
              icon: 'text-size',
              icon_color: '#223249'
            },
            {
              name: 'kanagawa colors',
              url: 'https://github.com/rebelot/kanagawa.nvim?tab=readme-ov-file#color-palette',
              icon: 'ripple',
              icon_color: '#A3D4D5'
            }
          ]
        }
      ]
    }]
});
