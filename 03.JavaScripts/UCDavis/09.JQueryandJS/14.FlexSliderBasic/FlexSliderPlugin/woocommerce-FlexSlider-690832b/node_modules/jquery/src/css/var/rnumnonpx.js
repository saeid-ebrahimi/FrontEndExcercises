define([
	"jquery/src/var/pnum"
], function( pnum ) {
	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
});
