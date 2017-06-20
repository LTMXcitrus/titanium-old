package com.titane.mot

import com.titane.mot.mongo.Dao
import io.vertx.core.AbstractVerticle
import io.vertx.core.Future

object App : AbstractVerticle() {

    override fun start(startFuture: Future<Void>) {
        val dao = Dao(vertx)
    }

}
