var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/gb_app', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './models/post.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Post'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Post',
        'documents': [
            {
              headline: "Women's Self-Defence Seminar",
              abstract: 'Spend time with the Gracie Barra Pink Team!',
              fulltext: 'If your Saturday is not yet completely booked for other things, mark it as a Gracie Barra day. Spend time with the Gracie Barra Pink Team and get a chance to win a pink team basket! Also, Saturday marks the UFC”s very first women’s title fight. UFC Bantamweight Ronda Rousey takes on Liz Carmouche for the undisputed women’s bantamweight title of the world! Join the men and women of Gracie Barra for a great time this Saturday!',
              category: 'Seminar',
              image: '../images/posts/women.png',
              author: 'Bruna de Souza',
              createdAt: new Date()
            },
            {
              headline: "The Double Leg Takedown",
              abstract: 'This week we are going to look at one of the most effective takedown techniques.',
              fulltext: 'Far from only a basic technique, you will be interested to know that the double leg takedown is the most successful takedown in the UFC. Even at the highest levels, against professional fighters, the double leg is the King of Takedowns. Of course, the double leg is a key technique in no-gi jiu-jitsu where the classic judo throws are more difficult to utilize. And finally, add the self-defense uses (which we will see in our videos today) on to the sports and MMA applications and we have a takedown that is super effective in all modalities of BJJ and rule sets.',
              category: 'GB Fundamentals',
              image: '../images/posts/double_leg.jpg',
              author: 'Allan de Souza',
              createdAt: new Date()
            },
            {
              headline: "Jiu-Jitsu is Great for Kids",
              abstract: "Do you know what are the benefits of jiu-jitsu for the child's development?",
              fulltext: 'Jiu-Jitsu is a good way for children to socialize, improve their fitness and have fun. In addition, it teaches discipline and respect, improves coordination and increases confidence through self-defence.',
              category: 'News',
              image: '../images/posts/kids.jpg',
              author: 'Allan de Souza',
              createdAt: new Date()
            },
            {
              headline: "Pratical Tips for Eating Clean",
              abstract: "Here are 3 real tips that you can use to positively change your eating habits.",
              fulltext: 'The imperfect plan that you stick to is better than the perfect plan that you can’t stick to you. This rule takes into consideration human nature. Sure, it would be best if we completely eliminated every gram of sugar from our diets… but that is REALLY difficult to do. We are human and have cravings. There is a tendency to throw out the entire plan to eat better if we fail at being perfect – “Why try? I can’t live without my favorite food!”. Why don’t you start by trying to eliminate SOME of the worse offenders in your diet? For example instead of going to absolutely zero sugar, start with stopping drinking soda and sweetened beverages. It is easy to do and that is a significant but meaningful change we can make without shocking your system and quitting. Baby steps. Gain momentum.',
              category: 'Eating Well',
              image: '../images/posts/eating_tips.png',
              author: 'Allan de Souza',
              createdAt: new Date()
            }
        ]
    }
];