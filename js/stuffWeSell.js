function ItemImage(url = "", alt = "") {
    this.url = url;
    this.alt = alt;
}

function thing(name = "No Name", price = 0.0, image = new ItemImage(), descriptor = "No Descriptor") {
    this.name = name;
    this.price = price;
    this.descriptor = descriptor;
    this.image = image;
}

var petList = [];
var productList = [];

petList.push(new thing("Adam", 50.00,
    new ItemImage("./img/pets/adam.jpg", "A picture of Adam, a bearded dragon"),
    "Adam is a surprisingly energetic bearded dragon, eager to play at a moments notice. Despite his high energy, he does enjoy still moments with a loving owner, cuddling up, especially when that long day of play leaves him one tired little guy!"));
petList.push(new thing("Alvan", 20.00,
    new ItemImage("./img/pets/alvan.jpg", "A picture of Alvan, a corgi"),
    "Alvan is among his younger years of life, happy to play and play! He loves learning new tricks, especially when you he can get a treat! Take this little guy home if you're looking for a smart, eager pup!"));
petList.push(new thing("Amy", 20.00,
    new ItemImage("./img/pets/amy.jpg", "A picture of Amy, a golden retriever"),
    "Amy is a down to earth dog, looking for a new home. She's a loving and affectionate dog, always on the lookout to snuggle up with a loving owner. Bring home Amy if you never want to spend another moment alone!"));
petList.push(new thing("Ben", 50.00,
    new ItemImage("./img/pets/ben.jpg", "A picture of Ben, a bearded dragon"),
    "Ben is a little slow, we'll admit. He enjoys quiet environments, and quiet people. Don't take this to mean he's lazy, though! He's a hard worker when it comes to earning treats, or catching bugs! Bring home Ben if you're looking for a chill companion."));
petList.push(new thing("Cyrus", 20.00,
    new ItemImage("./img/pets/cyrus.jpg", "A picture of Cyrus, an exotic shorthair cat"),
    "Cyrus might look grumpy, but he's a big pushover. Surprisingly quick to love, but a bit of a hog when it comes to food, Cyrus is looking for a loving home to spoil him senseless!"));
petList.push(new thing("Erin", 50.00,
    new ItemImage("./img/pets/erin.jpg", "A picture of Erin, a particularly jubulent bearded dragon"),
    "Erin is a bit of a jokester. She likes to hide and pop out and surprise people a lot. Very affectionate, she'll cuddle up to you when you least expect it. Take home Erin and you'll never have another boring day in your life!"));
petList.push(new thing("Jae", 15.00,
    new ItemImage("./img/pets/jae.jpg", "A picture of Jae, a calico cat"),
    "Jae is a diva, though and though. She can be a bit dramatic, but when you give her the proper attention, she gives you no shortage of love in return. Just keep in mind who the star of the show is around the house!"));
petList.push(new thing("Karsten", 15.00,
    new ItemImage("./img/pets/karsten.jpg", "A picture of Jae, a campiero bulldog (we think!)"),
    "Karsten is more of a lover and not a fighter. She likes to avoid conflict, and tuck herself under the biggest friend she's made. She's very loving, but a bit of a crybaby at times, too. Karsten is a good girl who needs a good home."));
petList.push(new thing("Loan", 25.00,
    new ItemImage("./img/pets/loan.jpg", "A picture of Loan, a kitten"),
    "Loan's pretty new to the world, and she needs some good guidance. She loves to play, and romp, and REALLY enjoys scratching posts. Bring home Loan if you're looking to lead a new kitten into the world of cat-hood!"));
petList.push(new thing("Nadezhda", 25.00,
    new ItemImage("./img/pets/nadezhda.jpg", "A picture of Nadezhda, a shorthair kitten"),
    "Nadezhda, a curious shorthair kitten, brings boundless energy and mischief wherever she goes. With her captivating green eyes and a penchant for adventure, she's always the life of the feline party. Her playful spirit and love for exploration make her the purrfect companion for any pet lover."));
petList.push(new thing("Raoul-droog", 1000.00,
    new ItemImage("./img/pets/raouldroog.jpg", "A picture of Raoul-droog, a british shorthair"),
    "Meet Raoul-droog, the dashing British shorthair with a flair for fashion. Sporting stylish sunglasses, he exudes suave charm wherever he struts. With an air of mystery and a heart of gold, he captures the hearts of all who meet him. (Yes, the glasses are included)"));
petList.push(new thing("Trevor", 30.00,
    new ItemImage("./img/pets/trevor.jpg", "A picture of Trevor, a spaniel"),
    "Introducing Trevor, the lovable spaniel with a heart as big as his floppy ears. Always wagging his tail, he spreads joy to everyone he meets. Whether fetching balls or cuddling close, Trevor's boundless affection makes him a paw-some companion."));


productList.push(new thing("Cat Complex", 300.00,
new ItemImage("./img/products/cat-complex.jpg", "A cat complex"),
"a compact cat tree with cozy beds inside and a durable scratch surface outside. Stylish, interactive, and space-saving, it's the ultimate feline haven!"));
productList.push(new thing("Cat Toy", 20.00,
new ItemImage("./img/products/cat-toy.jpg", "A cat playing with a cat toy"),
"The Ultimate Interactive Cat Toy! This innovative toy features a scratchable exterior, enticing feathers, and a hidden bell, providing hours of engaging fun for your furry friend. Compact and durable, it's the perfect playtime companion!"));
productList.push(new thing("Cat Tree", 1000.00,
new ItemImage("./img/products/cat-tree.jpg", "A cat tree with various features"),
"This compact product features cozy beds inside for relaxation and a scratchable exterior made of durable sisal. It's the purrfect combination of comfort and play, providing endless joy for your furry friend."));
productList.push(new thing("Cat Worm Toy", 25.00,
new ItemImage("./img/products/cat-worm.jpg", "A cat toy featuring a wooly worm"),
"The Enchanting Interactive Cat Toy! This captivating toy features a delightful wooly worm design that wiggles and squirms, enticing your cat to chase and pounce. Crafted with premium materials for durability, it guarantees hours of fun and exercise, keeping your feline friend entertained and happy!"));
productList.push(new thing("Round Dog Bed", 300.00,
new ItemImage("./img/products/dogbed-round.jpg", "A rounded dog bed"),
"The Perfect Dog Bed! This luxurious round bed offers a cozy and supportive spot for your furry companion to rest and sleep. Made with premium materials for comfort and durability, this bed ensures your dog feels cherished and relaxed, day and night."));
productList.push(new thing("Flat Dog Bed", 200.00,
new ItemImage("./img/products/dogbed.jpg", "A flat dog bed"),
"Your Dog's Dream Bed! This flat, ultra-comfortable dog bed provides the ideal spot for your furry friend to unwind and recharge. Crafted with premium cushioning and easy-to-clean materials, this mat-like bed offers a restful haven, ensuring your dog's well-being and happiness."));
productList.push(new thing("Medium Sized Doghouse", 500.00,
new ItemImage("./img/products/medium-doghouse.jpg", "A medium sized dog house"),
"The Perfect Medium Doghouse! This thoughtfully designed doghouse offers a safe and snug retreat for your furry companion. With weather-resistant materials and optimal ventilation, it ensures year-round comfort and protection. Treat your beloved pet to a charming abode!"));
productList.push(new thing("Pet Cream", 30.00,
new ItemImage("./img/products/pet-cream.jpg", "A small dog standing next to a bottle of pet cream"),
"The Ultimate Pet Cream! This premium cream is specially formulated to nourish and protect your furry friend's skin and coat. Enriched with natural ingredients, our unique formula soothes dryness, promotes a healthy shine, and provides a loving touch to your pet's grooming routine. Pamper your pet and see them glow with joy!"));
productList.push(new thing("Cactus Scratching Post", 70.00,
new ItemImage("./img/products/scratching-cactus.jpg", "A cactus themed scratching post"),
"A Prickly Playtime Delight! This unique scratching post features a cactus-inspired design with sisal-wrapped arms, providing your cat with a satisfying surface to scratch and maintain their claws. The desert-themed post adds a touch of charm to your home while keeping your feline friend entertained and your furniture safe from scratches!"));
productList.push(new thing("Scratching Post", 50.00,
new ItemImage("./img/products/scratching-post.jpg", "A scratching post"),
"The Ultimate Scratching Post for Your Beloved Cat! This stylish and sleek scratching post is thoughtfully crafted with your cat's needs in mind. Its elegant design seamlessly blends with your home decor while providing an irresistible scratching surface that stimulates your cat's senses and relieves stress. The high-quality materials ensure durability, making it a long-lasting investment. Say goodbye to shredded furniture and hello to a happy and healthy cat!"));
productList.push(new thing("Small Sized Doghouse", 50.00,
new ItemImage("./img/products/small-doghouse.jpg", "A small sized doghouse"),
"Your Dog's Cozy Hideaway! This smaller-sized doghouse is perfect for pint-sized pups, offering a snug and secure space for relaxation and play. Crafted with premium materials and a weather-resistant design, it ensures year-round comfort and protection for your furry companion. Treat your little friend to a charming abode, where they can feel safe, loved, and right at home!"));

export const allPets = petList;
export const allProducts = productList;
export const starProducts = [productList[3], petList[5], petList[10]]