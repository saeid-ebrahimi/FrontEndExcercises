class Point:
    def __init__(self, x: float, y: float) -> None:
        self.x = x
        self.y = y
    
class Rectangle:
    def __init__(self, origin: "Point", width:float, height:float) -> None:
        self.origin = origin
        self.width = width
        self.height = height
    
    def get_area(self):
        return self.width * self.height
    
    def print_coordinates(self):
        ending_point_x = self.origin.x + self.width
        ending_point_y = self.origin.y + self.height
        print("Starting Point (X):", self.origin.x)
        print("Starting Point (Y):", self.origin.y)
        print("Ending Point (X):", ending_point_x)
        print("Ending Point (Y)", ending_point_y)

def create_rectangle():
    rectangle_origin = Point(50, 100)
    rectangle = Rectangle(rectangle_origin, 90, 10)
    return rectangle

new_rectangle = create_rectangle()
print(new_rectangle.get_area())
new_rectangle.print_coordinates()