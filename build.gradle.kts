plugins { kotlin("js") version "1.3.70" }

repositories { jcenter() }

kotlin.target.browser {}

dependencies { implementation(kotlin("stdlib-js")) }