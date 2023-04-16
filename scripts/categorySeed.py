import csv
from pymongo import MongoClient
from bson.objectid import ObjectId

# Set up the connection to the MongoDB server and the 'categories' collection
mongo_uri ="mongodb+srv://iamrmrishan:Eluwa%212345@cluster0.s6mok2m.mongodb.net/myFirstDatabase"
client = MongoClient(mongo_uri)
db = client.myFirstDatabase
categories_collection = db.Category

# Function to insert data into the 'categories' collection
def insert_data(data):
    categories_collection.insert_one(data)

# Function to check if a category already exists
def category_exists(name, parent_id):
    return categories_collection.find_one({'name': name, 'parentId': parent_id}) is not None


# Read the CSV file and insert data into the MongoDB collection
csv_file_path = 'AmazonCategories.csv'

# Initialize a unique ID counter
unique_id_counter = 1

with open(csv_file_path, newline='') as csvfile:
    reader = csv.reader(csvfile)

    for row in reader:
        parent_id = None
        for category_name in row:
            if category_name:
                if not category_exists(category_name, parent_id):
                    category_id = ObjectId()
                    category_data = {
                        '_id': category_id,
                        'name': category_name,
                        'parentId': parent_id
                    }
                    insert_data(category_data)
                else:
                    category_id = categories_collection.find_one({'name': category_name, 'parentId': parent_id})['_id']

                parent_id = category_id

print("Categories collection has been seeded.")