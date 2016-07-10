
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('carvings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('carvings').insert({id: 1, name: 'Te Waha o Ruamoko', description:'Tu ana koe i te ana o Murirangawhenua, Hamama kau ana Te Waha o Ruamoko, Toi ake ra ko te kaokao Kaitaka, Tohu Matiti, tohu maataata'}),
        knex('carvings').insert({id: 2, name: 'Hineraumaukuuku', description:'Ma nehe Maui to tira haere i a Hineraumaukuuku, Kaikarangaranga i te po, i te ao, Te ha o haemata, te ia waiatarau, Kia korerohia nga tai hukahuka o Tangaroa'}),
        knex('carvings').insert({id: 3, name: 'Te Kauwae o Murirangawhenua', description:'E huri koe ki te pu o te taonga ki a maunga Aorangi, Ngai Tahupotiki, Te poutoko wananga a kui Murirangawhenua, Tipuna o pukauwae runga, pukauwae raro'})
      ]);
    });
};
