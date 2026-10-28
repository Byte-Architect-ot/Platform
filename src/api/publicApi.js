import { 
  getAllYears, 
  getEventsByYear, 
  getMembersByYear, 
  getEventById, 
  getImageUrl 
} from '../data/data';

/**
 * Static publicApi — serves data exclusively from data.ts
 */
export const publicApi = {
  /**
   * Returns all year-group objects.
   */
  async getAllYears() {
    return getAllYears();
  },

  /**
   * Returns events for a given yearGroup._id or year.
   */
  async getEventsByYear(yearId) {
    return getEventsByYear(yearId);
  },

  /**
   * Returns members for a given yearGroup._id or year.
   */
  async getMembersByYear(yearId) {
    return getMembersByYear(yearId);
  },

  /**
   * Returns a single event by its _id.
   */
  async getEventById(eventId) {
    return getEventById(eventId);
  },

  /**
   * Converts an image key / URL to a displayable URL.
   */
  getImageUrl(imageKey) {
    return getImageUrl(imageKey);
  },
};