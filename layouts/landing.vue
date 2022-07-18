<template>
	<div class="hero min-h-screen bg-base-200">
		 <div class="hero-content flex-col lg:flex-row-reverse">
			<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<div class="card-body">
					<slot />
				</div>
			</div>
			<div class="text-center lg:text-left ">
	     			<!-- Tanggalin niyo yung H1 at P Palitan niyo ng Image  --> 
				<h1 class="text-5xl font-bold">Login now!</h1>
	     			<p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
	   		</div>
	  	 </div>

	</div>
</template>
