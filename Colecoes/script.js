const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Moacir', 'SUDO');
userRoles.set('Thiago', 'ADMIN');
userRoles.set('Eliana', 'ADMIN');
userRoles.set('Eliane', 'USER');
userRoles.set('Jeff', 'USER');

console.log(getAdmins(userRoles));