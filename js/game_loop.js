module.exports.start = function (renderer, camera, scene, cube)
{
	// Game Loop
	function render() {
		requestAnimationFrame( render );

		// rotate cube
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.05;

		renderer.render( scene, camera );
	}

	// Start the loop
	render();
}
