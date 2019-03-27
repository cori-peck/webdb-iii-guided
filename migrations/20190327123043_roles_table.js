// what new changes we need to make
exports.up = function(knex) {
    return knex.schema.createTable('roles', function(tbl) {
        //primary key, called id have it autoincrement
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
    })
};


//how to undue the changes made in the up function
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles');
};
