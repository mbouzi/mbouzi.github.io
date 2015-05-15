module Testing
	def test
		p "this is a test"
	end
end

class Number_1
	include Testing
end

class Number_2
	include Testing
end

test_1 = Number_1.new
test_1.test

test_2 = Number_2.new
test_2.test




# class Player
# 	def initialize(name,team,accuracy)
# 		@name = name
# 		@team = team
# 		@accuracy = accuracy
# 	end

# 	def shoot
# 		if @accuracy > 60
# 			p "Score!!"
# 		else
# 			p "Miss!!"
# 		end
# 	end
# end


# theo = Player.new("Theo", "England", 80)

# flamini = Player.new("Flamini", "France", 30)


# theo.shoot

# flamini.shoot