class Base {
	// インスタンス変数
	numA : number;
	strA : "string";
	public numB : number;
	private numC : number;
	protected numD: number;
	regexpA?: RegExp;

	// クラス変数
	static numA: number;
	public static numB :number;
	private static numC : number;
	protected static numD : number; 
	static regexpA?: RegExp;

	// コンストラクタ
	constructor(boolA: boolean,
		public boolB: boolean,
		private boolC: boolean,
		protected boolD: boolean) {
		// エラー消し
		console.log(boolA,this.numC,this.boolC,Base.numC);
	}
	// メソッド
	hello(word: string):string {
		return "Hello," + word;
	}

	//get,setアクセ
	private__date:Date;
	get dataA();Date {
		return this._date;
	}
	set dateA(value:Date) {
		this._date = value;
	}

	optional() {
		if (this.regexpA !=null) {
			this.regexpA.test("Hi");
		}
		if (Base.regexpA !=null) {
			Base.regexpA.test("Hi");
		}
	}
}

let obj = new Base (true,false,true,false);
obj.numA;
obj.strA;
obj.numB;

obj.boolB;

obj.hello("TypeScript");
obj.dateA = new Date();
obj.dateA;

export {}