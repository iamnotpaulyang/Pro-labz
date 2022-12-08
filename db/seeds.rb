User.destroy_all
ProteinShake.destroy_all
Category.destroy_all
Review.destroy_all
Ingredient.destroy_all
ProteinShakeIngredient.destroy_all


puts "Creating Usernames..."

U1 = User.create(username: "C-fitz", password: "bootay")
U2 = User.create(username: "Alexi", password: "chestgod")
U3 = User.create(username: "Carloprezz", password: "backattack")
U4 = User.create(username: "P-painz", password: "chickenlegs")

puts "Creating Protein Shakes..."
#add images later
PS1 = ProteinShake.create(name: "Mango Madness", image: "https://healthywithachanceofsprinkles.com/wp-content/uploads/2022/02/Easy-Mango-Spinach-Smoothie-Recipe.jpg")
PS2 = ProteinShake.create(name: "Stuffed PBJ")
PS3 = ProteinShake.create(name: "Heartbeat")
PS4 = ProteinShake.create(name: "Piña Colada")
PS5 = ProteinShake.create(name: "Pick-me-Up") 

puts "Creating Categories..."

C1 = Category.create(name: "Condiment")
C2 = Category.create(name: "Protein")
C3 = Category.create(name: "Dairy")

puts "Creating Reviews..."

R1 = Review.create(user_id: U4.id, protein_shake_id: PS1.id, description: "I'm feeling the gains already.")
R2 = Review.create(user_id: U3.id, protein_shake_id: PS2.id, description: "Has everything I need to get me through the day.")
R3 = Review.create(user_id: U2.id, protein_shake_id: PS3.id, description: "AWFUL!")
R4 = Review.create(user_id: U1.id, protein_shake_id: PS4.id, description: "BEST SHAKE, PERIOD!")
R5 = Review.create(user_id: U2.id, protein_shake_id: PS4.id, description: "I agree, this is a really good shake!")
R6 = Review.create(user_id: U3.id, protein_shake_id: PS3.id, description: "Not my cup of tea.")
R7 = Review.create(user_id: U4.id, protein_shake_id: PS2.id, description: "PBJ All day!")
R8 = Review.create(user_id: U1.id, protein_shake_id: PS1.id, description: "Lightweight and perfect.")
R9 = Review.create(user_id: U1.id, protein_shake_id: PS2.id, description: "Haven't been hungry since I drank the shake.")
R10 = Review.create(user_id: U3.id, protein_shake_id: PS4.id, description: "Needs more coconut flavor.")

puts "Creating Ingredients..."

I1 = Ingredient.create(name: "Banana", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1522348874-organic-bananas.jpg")
I2 = Ingredient.create(name: "Blueberry", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1517956338-sno-pac-organic-blueberries.jpg")
I3 = Ingredient.create(name: "Strawberry", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1517956242-sno-pac-organic-strawberry.jpg")
I4 = Ingredient.create(name: "Raspberry", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1522348117-driscolls-raspberries.jpg")
I5 = Ingredient.create(name: "Blackberry", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1522349134-naturipe-blackberries.jpg")
I6 = Ingredient.create(name: "Mango", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1499451726-mango-green-yellow.jpg")
I7 = Ingredient.create(name: "Apple", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1515158983-apple-galalg-(apples).jpg")
I8 = Ingredient.create(name: "Pear", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1602193784-pear-bartlett-la.jpg")
I9 = Ingredient.create(name: "Pineapple", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1495699833-dole-crushed-pineapple.jpg")
I10 = Ingredient.create(name: "Beet", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1604176934-beets-loose.jpg")
I11 = Ingredient.create(name: "Spinach", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1602443566-wild-harvest-orgn-baby-spinach.jpg")
I12 = Ingredient.create(name: "Quaker Oat", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1602278539-quaker-oats-whole-grain.jpg")
I13 = Ingredient.create(name: "Almond Butter", category_id: C1.id, image: "https://i5.walmartimages.com/asr/9a5e1ec4-a7f0-417f-a8cd-caee21b5fdf4.41ada2f06ee24d9b11e27b92948224fd.jpeg")
I14 = Ingredient.create(name: "Peanut Butter", category_id: C1.id, image: "https://bjs.scene7.com/is/image/bjs/24944?$bjs-Zoom$")
I15 = Ingredient.create(name: "Coconut Flake", category_id: C1.id, image: "https://m.media-amazon.com/images/I/51CQ6ifS7uL._SL1000_.jpg")
I16 = Ingredient.create(name: "Chia Seed", category_id: C1.id, image: "https://i5.walmartimages.com/asr/db348c7e-398c-489e-9039-08cc724f4d1c.679e6ec54d5d9ae03de5c97392fbff55.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF")
I17 = Ingredient.create(name: "Granola", category_id: C1.id, image: "https://www.quicklly.com/upload_images/product/1632957932-redmill-natural-granola.jpg")
I18 = Ingredient.create(name: "Honey", category_id: C1.id, image: "https://bjs.scene7.com/is/image/bjs/22622?$bjs-Zoom$")
I19 = Ingredient.create(name: "Momentous Grass-Fed Whey Protein", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/Momentous-Essential-Grass-Fed-Whey-Protein-Isolate_With_BG.png?w=525")
I20 = Ingredient.create(name: "Naked Whey", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/NAKED-WHEY-Grass-Fed-Unflavored-Whey-Protein-Powder_With_BG.png?w=525")
I21 = Ingredient.create(name: "Ascent Native Fuel Micellar Casein", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/Ascent-Native-Fuel-Micellar-Casein-Protein-Powder_With_BG.png?w=525")
I22 = Ingredient.create(name: "Momentous Essential Plant-Based Protein", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/Momentous-Essential-Plant-Based-Pea-and-Rice-Protein-Powder_With_BG.png?w=525")
I23 = Ingredient.create(name: "Garden of Life Sport Grass-Fed Organic Whey Protein", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/Garden-of-Life-Sport-Whey-Protein-Powder_With_BG.png?w=525")
I24 = Ingredient.create(name: "Ghost Whey Protein", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/Ghost-Whey-Protein-Powder_With_BG.png?w=525")
I25 = Ingredient.create(name: "Optimum Nutrition Gold Standard 100% Whey", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/Optimum-Nutrition-Gold-Standard-Whey_With_BG.png?w=525")
I26 = Ingredient.create(name: "Now Sports Egg White Protein", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/NOW-Sports-Nutrition-Egg-White-Protein_With_BG.png?w=525")
I27 = Ingredient.create(name: "Transparent Labs Mass Gainer", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/Transparent-Labs-Mass-Gainer_With_BG.png?w=525")
I28 = Ingredient.create(name: "Gainful", category_id: C2.id, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/06/Gainful_With_BG_.png?w=525")
I29 = Ingredient.create(name: "Dymatize ISO100 Hydrolized", category_id: C2.id, image: "https://cdn.shopify.com/s/files/1/0471/3332/7519/products/DYM1650054_grey_900x.jpg?v=1639097137")
I30 = Ingredient.create(name: "Whole Milk", category_id: C3.id, image: "https://www.quicklly.com/upload_images/product/1584815327-organic-valley-whole-milk.jpg")
I31 = Ingredient.create(name: "Skim Milk", category_id: C3.id, image: "https://www.quicklly.com/upload_images/product/1633018676-org-val-organic-skim-milk.jpg")
I32 = Ingredient.create(name: "Almond Milk", category_id: C3.id, image: "https://www.quicklly.com/upload_images/product/1633016725-silk-almond-milk-unsweetened.jpg")
I33 = Ingredient.create(name: "Soy Milk", category_id: C3.id, image: "https://www.quicklly.com/upload_images/product/1602268269-silk-plain-soy-milk.jpg")
I34 = Ingredient.create(name: "Lactaid Milk", category_id: C3.id, image: "https://www.quicklly.com/upload_images/product/1517886216-lactaid-fat-free-milk.jpg")
I35 = Ingredient.create(name: "Oat Milk", category_id: C3.id, image: "https://cdn.shopify.com/s/files/1/0471/3332/7519/products/RSP4860240_grey_900x.jpg?v=1636138670")
I36 = Ingredient.create(name: "Greek Yogurt", category_id: C3.id, image: "https://i5.walmartimages.com/asr/e301c3b5-eeaf-47bf-bbbc-4220193c2529.b300f6244c6f46d19c75cf3ad169305d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF")

puts "Creating Protein Shake Ingredients..."

ProteinShakeIngredient.create(protein_shake_id: PS1.id, ingredient_id: I1.id )
ProteinShakeIngredient.create(protein_shake_id: PS1.id, ingredient_id: I6.id )
ProteinShakeIngredient.create(protein_shake_id: PS1.id, ingredient_id: I11.id )
ProteinShakeIngredient.create(protein_shake_id: PS1.id, ingredient_id: I20.id )
ProteinShakeIngredient.create(protein_shake_id: PS1.id, ingredient_id: I32.id )


ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I1.id )
ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I2.id )
ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I3.id )
ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I4.id )
ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I5.id )
ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I12.id )
ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I14.id )
ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I32.id )
ProteinShakeIngredient.create(protein_shake_id: PS2.id, ingredient_id: I24.id )

ProteinShakeIngredient.create(protein_shake_id: PS3.id, ingredient_id: I7.id )
ProteinShakeIngredient.create(protein_shake_id: PS3.id, ingredient_id: I8.id )
ProteinShakeIngredient.create(protein_shake_id: PS3.id, ingredient_id: I10.id )
ProteinShakeIngredient.create(protein_shake_id: PS3.id, ingredient_id: I20.id )

ProteinShakeIngredient.create(protein_shake_id: PS4.id, ingredient_id: I1.id )
ProteinShakeIngredient.create(protein_shake_id: PS4.id, ingredient_id: I9.id )
ProteinShakeIngredient.create(protein_shake_id: PS4.id, ingredient_id: I15.id )
ProteinShakeIngredient.create(protein_shake_id: PS4.id, ingredient_id: I31.id )
ProteinShakeIngredient.create(protein_shake_id: PS4.id, ingredient_id: I22.id )

ProteinShakeIngredient.create(protein_shake_id: PS5.id, ingredient_id: I1.id )
ProteinShakeIngredient.create(protein_shake_id: PS5.id, ingredient_id: I2.id )
ProteinShakeIngredient.create(protein_shake_id: PS5.id, ingredient_id: I3.id )
ProteinShakeIngredient.create(protein_shake_id: PS5.id, ingredient_id: I35.id )
ProteinShakeIngredient.create(protein_shake_id: PS5.id, ingredient_id: I29.id )

puts "Seeding done...🌱"