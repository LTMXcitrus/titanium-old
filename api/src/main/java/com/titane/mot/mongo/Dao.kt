package com.titane.mot.mongo

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.SerializationFeature
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.titane.mot.model.Stock
import com.titane.mot.util.logInfo
import io.vertx.core.Vertx
import io.vertx.core.json.JsonObject
import io.vertx.ext.mongo.MongoClient

private val mongodb_url = System.getProperty("mongodb_url", "mongodb://localhost:27017")
private val mongodb_name = System.getProperty("mongodb_name", "titanium")
private val collection_name = "stocks"

class Dao(vertx: Vertx) {

    val client: MongoClient
    val mapper = jacksonObjectMapper()


    init {
        mapper.findAndRegisterModules()
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL)
        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false)

        val config = JsonObject().put("connection_string", mongodb_url).put("db_name", mongodb_name)
        client = MongoClient.createShared(vertx, config)
    }

    fun save(stock: Stock) {
        client.save(collection_name, JsonObject(mapper.writeValueAsString(stock)), { logInfo<Dao> { "$it"}})
    }

}