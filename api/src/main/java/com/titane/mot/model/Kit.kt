package com.titane.mot.model

import java.util.*
import kotlin.collections.HashMap


data class Kit(
        val name: String, // hygiène, immobilisation, bilan, ...
        val kitElements:List<EquipmentStock>
)