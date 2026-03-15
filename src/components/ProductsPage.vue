import axios from 'axios'; export default { data() { return { products: [] }; }, async created() {
const res = await axios.get('http://localhost:3000/api/products'); this.products = res.data; } }
