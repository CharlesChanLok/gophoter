const PHOTOS = require('./tables').PHOTOS;
const PHOTOTAGS = require('./tables').PHOTOTAGS;
const LIKES = require('./tables').LIKES;

module.exports = class PhotoService {
    constructor(knex) {
        this.knex = knex;
    }

    create(photo) {
        console.log(photo)
        return this.knex
            .insert({user_id: photo.userId, img_url: photo.path})
            .into(PHOTOS)
            .returning("img_url");
    }

    delete(photoId) {
        return this.knex(PHOTOS)
            .where("id", photoId)
            .del();
    }

    list(limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(PHOTOS)
            .limit(limit).offset(offset);
    }

    listPhotosByUser() {
        return this.knex
        .select('*')
        .from(PHOTOS)
            .join('users', { 'users.id': 'photos.user_id' })
    }

    tag(photoId, tagId) {
        return this.knex
            .insert({
                'photo_id': photoId,
                'tag_id': photoId
            })
            .into(PHOTOTAGS)
            .returning("id");
    }

    untag(photoId, tagId) {
        return this.knex(PHOTOTAGS)
            .where({
                'photo_id': photoId,
                'tag_id': tagId
            }).del();
    }

    update(id, photo) {
        return this.knex(PHOTOS)
            .update(photo)
            .where("id", id);
    }

    like(userId, photoId) {
        return this.knex
            .insert({
                'user_id': userId,
                'photo_id': photoId
            })
            .into(LIKES)
            .returning("*");
    }

    unlike(userId, photoId) {
        return this.knex(LIKES)
            .where({
                'user_id': userId,
                'photo_id': photoId
            }).del();
    }

    search(searchCriteria, limit = 100, offset = 0) {
        return this.knex
            .select("*")
            .from(PHOTOS)
            .where(searchCriteria)
            .limit(limit).offset(offset);
    }
}