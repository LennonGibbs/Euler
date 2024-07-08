import unittest

class TestAreaCalculator(unittest.TestCase):
    def test_rectangle(self):
        self.assertEqual(TestCase((6,3)).rectangle(),18)
        with self.assertRaises(TypeError):
            TestCase((6,3)).square(2)


 if __name__ == '__main__':
     unittest.main()

class Testcase():
    size = (0,0)
    def __init__(self,size):
        self.size=size
    
    def rectangle(self):
        area = self.size[0]*self.size[1]
        return(area)