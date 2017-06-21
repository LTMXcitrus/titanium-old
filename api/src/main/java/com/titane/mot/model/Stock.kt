package com.titane.mot.model

import java.util.*

data class Stock(
        val name: String, // camion, pharma, formation
        val kits: List<Kit>
)
