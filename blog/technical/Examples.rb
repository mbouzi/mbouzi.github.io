class Player
	def initialize(name,team,accuracy)
		@name = name
		@team = team
		@accuracy = accuracy
	end

	def shoot
		if @accuracy > 60
			p "Score!!"
		else
			p "Miss!!"
		end
	end
end


theo = Player.new("Theo", "England", 80)

flamini = Player.new("Flamini", "France", 30)


theo.shoot

flamini.shoot