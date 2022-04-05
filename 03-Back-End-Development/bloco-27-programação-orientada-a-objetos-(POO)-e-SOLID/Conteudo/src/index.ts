class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string[];
  private _connectedTo: string;

  constructor(b: string, s: number, r: number, c: string[], ct: string) {
    console.log(`Creating tv ${b}`);
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = ct;
  }

  get brand(): string {
    return this._brand;
  }

  get size(): number {
    return this._size;
  }

  get resolution(): number {
    return this._resolution;
  }

  get connections(): string[] {
    return this._connections;
  }

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if(this._connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log(`${value} 'Sorry, connection unavailable!'`);
    }
  }
}

const t1 = new Tv('LG', 55, 1080, ['HDMI', 'DVI', 'VGA'], 'HDMI');
const t2 = new Tv('Samsung', 65, 2160, ['HDMI', 'DVI', 'VGA'], 'HDMI');

// console.log(`Turning on ${this._brand}, ${this._size} inches, ${this._resolution} dpi, ${this._connections} connections, connected to ${this._connectedTo}`);

t1.connectedTo = 'DVI';

console.log(`Turning on ${t1.brand}, ${t1.size} inches, ${t1.resolution} dpi, ${t1.connections} \navailable connections, connected to ${t1.connectedTo}`);

console.log(`Turning on ${t2.brand}, ${t2.size} inches, ${t2.resolution} dpi, ${t2.connections} \navailable connections, connected to ${t2.connectedTo}`);
