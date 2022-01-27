class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i)) % this.data.length;
        };
        return hash;
    };

    set (key, value){
        let address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = [];
        }
            this.data[address].push([key,value]);
            return this.data;
    };

    get(key){
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if (currentBucket){
            for (let i = 0; i < currentBucket.length; i++){
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined
    };

    keys(){
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i]){
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

const myHashtable = new HashTable(2);
myHashtable.set('Tushar', 18);
myHashtable.set('Stuart', 5);
// console.log(myHashtable.get('Tushar'));
// console.log(myHashtable.keys());
console.log(myHashtable)


