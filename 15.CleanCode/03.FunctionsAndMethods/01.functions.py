# 1. calling function should be readable : the number and order of arguments matter
  # 1.1: minimize the number of parameters
    # no argument: Easy to understand , easy to call, best possible option
    # 1 argument: Easy to understand , easy to call, very good possible option
    # 2 arguments: Decent to understand , Acceptable to call, use with caution
    # 3 arguments: challenging to understand, challenging to call , avoid if possible
    # 3 < arguments: difficult to read and understand, difficult to call, Always avoid 

#2. working with the functions should be easy / readable: the length of the function body matters
  # 2.1: try don't modify the parameter within the function body when it is not expected, like in createUser function
    # do it within functions like addId
  # 2.2: try to make functions as small as it is possible : function should do 'one thing'
    # 2.2.1: one thing lies under understanding these two concept:
      #  2.2.1.1: different operations 
      # 2.2.1.2: different levels of abstraction

