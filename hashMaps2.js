const linkedList = require('./ll');

class HashMap {
  constructor(initialCapacity=8) {
      this.length = 0;
      this._hashTable = [];
      this._capacity = initialCapacity;
      this._deleted = 0;
  }

  get(key) {
      const index = this._findSlot(key);
      if (this._hashTable[index] === undefined) {
          //throw new Error('Key error');
          return null;
      }
      return this._hashTable[index].value;
  }

  set(key, value){
      //Find the slot where this key should be in
      const index = this._findSlot(key);

      if(!this._hashTable[index]){
          this.length++;
      }
      const newInput = {
          key,
          value,
          DELETED: false
      }

      if (!this._hashTable[index]){
        const newList = new linkedList()
        newList.insertFirst(newInput)
        this._hashTable[index] = newList
      }else{
        let flagExist = false;
        let tempNode = this._hashTable[index].head;
        while (tempNode!==null){
          if (key===tempNode.value.key){
            tempNode.value.value = value;
            flagExist = true;
          }
          tempNode = tempNode.next;
        }
        if (!flagExist)
          this._hashTable[index].insertFirst(newInput)
      }
  }

  delete(key) {
      const index = this._findSlot(key);
      const slot = this._hashTable[index];
      if (slot === undefined) {
          throw new Error('Key error');
      }
      slot.DELETED = true;
      this.length--;
      this._deleted++;
  }

  has(key){
    const index = this._findSlot(key);
      if (this._hashTable[index] === undefined) {
          //throw new Error('Key error');
          return false;
      }
      return true;
  }

  _findSlot(key) {
      const hash = HashMap._hashString(key);
      const start = hash % this._capacity;
      return start % this._capacity;
  }

  static _hashString(string) {
      let hash = 5381;
      //console.log(string);
      for (let i = 0; i < string.length; i++) {
          //Bitwise left shift with 5 0s - this would be similar to
          //hash*31, 31 being the decent prime number
          //but bit shifting is a faster way to do this
          //tradeoff is understandability
          hash = (hash << 5) + hash + string.charCodeAt(i);
          //converting hash to a 32 bit integer
          hash = hash & hash;
      }
      //making sure hash is unsigned - meaning non-negtive number.
      return hash >>> 0;
  }
}

module.exports = HashMap
