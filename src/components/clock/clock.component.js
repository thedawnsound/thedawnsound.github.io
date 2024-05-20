var newStyle = document.createElement('style');
newStyle.appendChild(document.createTextNode("\
@font-face {
    font-family: "DaddyTimeMono";
    src: url("https://raw.githubusercontent.com/thedawnsound/kanagawa-discord-fontchange/main/DaddyTimeMono.otf");\
}\
"));

document.head.appendChild(newStyle);

class Clock extends Component {
  refs = {
    clock: '.clock-time',
    icon: '.clock-icon'
  };

  constructor() {
    super();
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.fonts.roboto
    ];
  }

  style() {
    return `
        .clock-time {
            white-space: nowrap;
            font: 300 9pt 'DaddyTimeMono', sans-serif;
            color: #c1c1c1;
            letter-spacing: .5px;
        }

        .clock-icon {
            color: #ff7b95;
            font-size: 10pt;
            margin-right: 10px;
        }
    `;
  }

  template() {
    return `
        <span class="material-icons clock-icon">schedule</span>
        <p class="clock-time"></p>
    `;
  }

  setIconColor() {
    this.refs.icon.style.color = CONFIG.clock.iconColor;
  }

  setTime() {
    const date = new Date();

    this.refs.clock = date.strftime(CONFIG.clock.format);
  }

  connectedCallback() {
    this.render().then(() => {
      this.setTime();
      this.setIconColor();

      setInterval(() => this.setTime(), 1000);
    });
  }
}
