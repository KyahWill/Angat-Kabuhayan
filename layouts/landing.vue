<template>
	<div class="hero min-h-screen bg-base-200">
		 <div class="hero-content flex-col-reverse lg:flex-row-reverse">
			<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<div class="card-body">
					<slot />
				</div>
			</div>
			<div class="text-center lg:text-left ">
	   			<img src="~/assets/images/LandingBackground.png" />
			</div>
	  	 </div>

	</div>
</template>
