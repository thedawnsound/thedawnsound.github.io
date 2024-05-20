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
      this.resources.fonts.daddytimemono
    ];
  }

  style() {
    return `
        .clock-time {
            white-space: nowrap;
            font: 300 11pt 'DaddyTimeMono', sans-serif;
            color: #DCD7BA;
            letter-spacing: .5px;
        }

        .clock-icon {
            color: #ff7b95;
            font-size: 12pt;
            margin-right: 10px;
        }
    `;
  }

  template() {
    return `
        <span class="material-icons clock-icon">event</span>
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
