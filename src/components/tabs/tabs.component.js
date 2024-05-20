class Links extends Component {
  constructor() {
    super();
  }

  static getIcon(link) {
    const defaultColor = '#726f6f';

    return link.icon
      ? `<i class="ti ti-${link.icon} link-icon"
            style="color: ${link.icon_color ?? defaultColor}"></i>` : '';
  }

  static getAll(tabName, tabs) {
    const { categories } = tabs.find(f => f.name === tabName);

    return `
      ${ categories.map(({ name, links }) => {
        return `
          <li>
            <h1>${ name }</h1>
              <div class="links-wrapper">
              ${links.map(link =>
                `
                  <div class="link-info">
                    <a href="${ link.url }" target="_self">
                      ${Links.getIcon(link)}
                      ${link.name ? `<p class="link-name">${link.name}</p>` : ''}
                    </a>
                </div>`).join('')
              }
            </div>
          </li>`;
      }).join('')}
    `;
  }
}

class Category extends Component {
  constructor() {
    super();
  }

  static getBackgroundStyle(url) {
    return `style="background: #fff url(${url}) repeat left;"`;
  }

  static getAll(tabs) {
    return `
      ${ tabs.map(({ name, background_url }, index) => {
          return `<ul class="${ name }" ${Category.getBackgroundStyle(background_url)} ${index == 0 ? 'active' : ''}>
            <div class="banner"></div>
            <div class="links">${Links.getAll(name, tabs)}</div>
          </ul>`;
      }).join('')}
    `;
  }
}

class Tabs extends Component {
  refs = {};

  constructor() {
    super();
    this.tabs = CONFIG.tabs;
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.icons.tabler,
      this.resources.fonts.roboto,
      this.resources.fonts.daddytimemono,
      this.resources.fonts.raleway,
      this.resources.fonts.nunito,
      this.resources.libs.awoo
    ];
  }

  style() {
    return `
      status-bar {
          bottom: -70px;
          height: 32px;
          background: #1F1F28;
          border-radius: 4px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, .25);
      }


      #panels, #panels ul,
      #panels .links {
          position: absolute;
      }

      .nav {
          color: #fff;
      }

      #panels {
          border-radius: 5px 0 0 5px;
          width: 90%;
          max-width: 1200px;
          height: 450px;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          background: #1F1F28;
      }

      .categories {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 5px 0 0 5px;
      }

      .categories ul {
          --panelbg: transparent;
          --flavour: var(--accent);
          width: 100%;
          height: 100%;
          right: 100%;
          background: #fff url("../img/bg-1.gif") repeat bottom;
          transition: all .6s;
          animation: scroll 25s ease-in-out infinite;
      }

      @keyframes scroll {
          50% {
              background-position-y: -240px;
          }
      }

      .categories ul:nth-child(2) {
          --flavour: #7E9CD8;
      }

      .categories ul:nth-child(3) {
          --flavour: #98BB6C;
      }

      .categories ul .links {
          box-shadow: inset -1px 0 var(--flavour);
      }

      .categories ul[active] {
          right: 0;
          z-index: 1;
      }

      .categories .links {
          right: 0;
          width: 70%;
          height: 100%;
          background: #1f1f28;
          padding: 5%;
          flex-wrap: wrap;
      }

      .categories .links li {
          list-style: none;
      }

      .categories ul .links a {
          color: #DCD7BA;
          text-decoration: none;
          font: 700 18px 'DaddyTimeMono', sans-serif !important;
          transition: all .2s;
          display: inline-flex;
          align-items: center;
          padding: .4em .7em;
          background: #363646;
          box-shadow: 0 4px #16161D, 0 5px 10px rgb(0 0 0 / 50%);
          border-radius: 2px;
          margin-bottom: .7em;
      }

      .categories .link-info {
          display: inline-flex;
      }

      .categories .link-info:not(:last-child) { margin-right: .5em; }

      .categories ul .links a:hover {
          transform: scale(1.2);
          box-shadow: 0 0 rgba(0, 0, 0, 0.25), 0 0 0 rgba(0, 0, 0, .5), 0 -4px 5px rgba(0, 0, 0, .1);
          color: #f4ffd7;
      }

      .categories ul::after {
          content: attr(class);
          position: absolute;
          display: flex;
          text-transform: uppercase;
          overflow-wrap: break-word;
          width: 25px;
          height: 250px;
          padding: 1em;
          margin: auto;
          border-radius: 5px;
          box-shadow: inset 0 0 0 1px rgb(220 215 186 / 50%);
          left: calc(15% - 42.5px);
          bottom: 0;
          top: 0;
          background: linear-gradient(to top, #000000, rgb(191 191 191 / 40%));
          color: rgb(220 215 186 / 65%);
          letter-spacing: 1px;
          font: 100 30px 'Nunito', sans-serif;
          text-align: center;
          flex-wrap: wrap;
          word-break: break-all;
          align-items: center;
          mix-blend-mode: screen;
          backdrop-filter: blur(3px);
      }

      .categories .links li:not(:last-child) {
          box-shadow: 0 1px 0 rgba(255, 255, 255, .07);
          padding: 0 0 .5em 0;
          margin-bottom: 1.5em;
      }

      .categories .links li h1 {
          color: #363646;
          font-size: 16px;
          margin-bottom: 1em;
          font-weight: 1400;
          letter-spacing: 1px;
          font-family: 'DaddyTimeMono', sans-serif;
      }

      .categories .link-icon {
          font-size: 27px;
          color: #726f6f;
      }

      .categories .link-icon + .link-name {
          margin-left: 10px;
          color: #DCD7BA;
          font-family: 'DaddyTimeMono', sans-serif;
      }

      .categories .links-wrapper {
          display: flex;
          flex-wrap: wrap;
          color: #363646;
      }
    `;
  }

  template() {
    return `
      <div id="links" class="-">

        <div id="panels">
          <div class="categories">
            ${Category.getAll(this.tabs)}
            <search-bar></search-bar>
          </div>
          <status-bar class="!-"></status-bar>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}
