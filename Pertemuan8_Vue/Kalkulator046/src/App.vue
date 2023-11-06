<template>
  <div>
    <form @submit.prevent="hitung">
      <input v-model="nomorsatu" type="number" placeholder="Masukkan angka pertama">
      <input v-model="nomordua" type="number" placeholder="Masukkan angka kedua">
      <select v-model="operator">
        <option value="penjumlahan">+</option>
        <option value="pengurangan">-</option>
        <option value="perkalian">*</option>
        <option value="pembagian">/</option>
        <option value="pangkat">^</option>
      </select>
      <button type="submit">Hitung</button>
    </form>

    <div v-if="hasil !== null">
      <h2>Hasil:</h2>
      <p>{{ hasil }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nomorsatu: "",
      nomordua: "",
      operator: "",
      hasil: null,
    };
  },

  methods: {
    hitung() {

      const surprise = "Hitung Sendiri";
      if (this.operator === "penjumlahan") {
        this.hasil = parseFloat(this.nomorsatu) + parseFloat(this.nomordua);
      } else if (this.operator === "pengurangan") {
        this.hasil = parseFloat(this.nomorsatu) - parseFloat(this.nomordua);
      } else if (this.operator === "perkalian") {
        this.hasil = parseFloat(this.nomorsatu) * parseFloat(this.nomordua);
      } else if (this.operator === "pembagian") {
        this.hasil = parseFloat(this.nomorsatu) / parseFloat(this.nomordua);
      }
       else if (this.operator ==="pangkat")
       {
        this.hasil = surprise;
       }
    },
  },
};
</script>
