<script setup>
const works = [
  {
    name: "作品1",
    des: "这是作品1的描述",
    logo: "https://www.baidu.com/img/flexible/logo/pc/result.png",
    url: "https://www.baidu.com",
  },
  {
    name: "作品2",
    des: "这是作品2的描述",
    logo: "https://www.baidu.com/img/flexible/logo/pc/result.png",
    url: "https://www.baidu.com",
  },
];

const openPage = (url) => {
  window.open(url);
};
</script>

<template>
  <div>
    <h2 class="card-header">我的作品</h2>
    <div class="cards">
      <div
        class="card"
        v-for="work in works"
        :key="work.name"
        @click="openPage(work.url)"
      >
        <img :src="work.logo" class="img-fluid" />
        <div class="card-body">
          <div class="card-title">{{ work.name }}</div>
          <div class="card-text">{{ work.des }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.card {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  padding: 1rem;
  color: white !important;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
}

.card-body {
  color: white;
}

.img-fluid {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 1rem;
}
</style>
