puts "🌱 Seeding spices..."

puts "Creating Albums..."

Album.create(album_name: "Abbey Road")
Album.create(album_name: "Let it Be")
Album.create(album_name: "Yellow Submarine")
Album.create(album_name: "The White Album")
Album.create(album_name: "Magical Mystery Tour")
Album.create(album_name: "Sgt. Pepper's Lonely Hearts Club Band")
Album.create(album_name: "Revolver")
Album.create(album_name: "Rubber Soul")
Album.create(album_name: "Help!")
Album.create(album_name: "Beatles for Sale")
Album.create(album_name: "A Hard Day's Night")
Album.create(album_name: "With the Beatles")
Album.create(album_name: "Please Please Me")

puts "Creating Songwriters"

Songwriter.create(name: "Paul McCartney")
Songwriter.create(name: "John Lennon")
Songwriter.create(name: "George Harrison")
Songwriter.create(name: "Ringo Starr")

puts "Creating Songs"

Song.create(song_name: "Yesterday", songwriter_id: 1, album_id: 9)
Song.create(song_name: "Here Comes the Sun", songwriter_id: 3, album_id: 1)
Song.create(song_name: "Across the Universe", songwriter_id: 2, album_id: 2)
Song.create(song_name: "Boys", songwriter_id: 4, album_id: 13)

puts "Creating Reviews"

Review.create(review: 10, song_id: 1)
Review.create(review: 10, song_id: 2)
Review.create(review: 10, song_id: 3)
Review.create(review: 10, song_id: 4)


puts "✅ Done seeding!"
