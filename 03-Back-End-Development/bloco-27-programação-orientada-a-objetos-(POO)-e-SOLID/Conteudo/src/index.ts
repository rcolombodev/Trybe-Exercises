class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58); 
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/
class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: number;
  private _connectedTo: string;

  constructor(b: string, s: number, r: number, c: number, ct: string) {
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

  get connections(): number {
    return this._connections;
  }

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    this._connectedTo = value;
  }
}

const t1 = new Tv('LG', 55, 1080, 2, 'HDMI');
const t2 = new Tv('Samsung', 65, 2160, 4, 'HDMI');

// console.log(`Turning on ${this._brand}, ${this._size} inches, ${this._resolution} dpi, ${this._connections} connections, connected to ${this._connectedTo}`);

t1.connectedTo = 'DVI';

console.log(`Turning on ${t1.brand}, ${t1.size} inches, ${t1.resolution} dpi, ${t1.connections} connections, connected to ${t1.connectedTo}`);

console.log(`Turning on ${t2.brand}, ${t2.size} inches, ${t2.resolution} dpi, ${t2.connections} connections, connected to ${t2.connectedTo}`);
