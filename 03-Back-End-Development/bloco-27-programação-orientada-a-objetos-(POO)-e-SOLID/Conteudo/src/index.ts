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
  brand: string;
  size: number;
  resolution: number;
  connections: number;
  connectedTo: string;

  constructor(b: string, s: number, r: number, c: number, ct: string) {
    console.log(`Creating tv ${b}`);
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this.connectedTo = ct;
  }

  turnOn() {
    console.log(`Turning on ${this.brand}, ${this.size} inches, ${this.resolution} dpi, ${this.connections} connections, connected to ${this.connectedTo}`);
  }
}

const t1 = new Tv('LG', 55, 1080, 2, 'HDMI');
const t2 = new Tv('Samsung', 65, 2160, 4, 'HDMI');
console.log(t1.brand, t1.size, t1.resolution, t1.connections, t1.connectedTo);
console.log(t2.brand, t2.size, t2.resolution, t2.connections, t2.connectedTo);

t1.turnOn();
t2.turnOn();