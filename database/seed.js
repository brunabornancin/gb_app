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
                title: 'Free Seminar - Self-defence for women',
                description: 'If your Saturday is not yet completely booked for other things, mark it as a Gracie Barra day. Spend time with the Gracie Barra Pink Team and get a chance to win a pink team basket!',
                category: 'Events',
                img: '../images/posts/women.png'
            },
            {
                title: 'GB Fundamentals: The Double Leg Takedown',
                description: 'This week on GB Technique we are going to look at one of the most fundamental and effective takedown techniques in all of jiu-jitsu. The double leg takedown.',
                category: 'GB Learning',
                img: '../images/posts/double_leg.jpg'
            },
            {
                title: 'Jiu-jitsu is Great for Kids',
                description: 'Jiu-Jitsu is a good way for children to socialize, improve their fitness and have fun. In addition, it teaches discipline and respect, improves coordination and increases confidence through self-defence.',
                category: 'News',
                img: '../images/posts/kids.jpg'
            },
            {
                title: 'Pratical Tips for Eating Clean',
                description: 'Here are 3 real tips that you can use to positively change your eating habits.',
                category: 'Eating Well',
                img: '../images/posts/eating_tips.png'
            }
        ]
    }
];